const express = require("express");
const { userModel } = require("../models/userModel");
const { Auth } = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const sendEmail = require("../utils/sendEmail");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const isUserPresent = await userModel.findOne({ email });
    if (isUserPresent) {
      res.status(400).send({ message: "User is already present plz login" });
    }

    const hash = await bcrypt.hash(password, 8);

    const user = new userModel({
      name,
      email,
      password: hash,
      avater: {
        public_id: "addd",
        url: "adfd",
      },
      role,
    });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      expiresIn: "1m",
    });

    res
      .status(200)
      .send({ message: " new user has been created", token: token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUserPresent = await userModel
      .findOne({ email })
      .select("+password");
    if (!isUserPresent) {
      res.status(400).send({ message: "User is not register plz signup 1st" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserPresent.password
    );
    if (!isPasswordCorrect) {
      res.status(400).send({ message: "User password is not Correct" });
    }

    const token = jwt.sign({ id: isUserPresent._id }, process.env.jwt_secret, {
      expiresIn: "1hr",
    });

    res.cookie("token", token);

    res.status(200).send({ message: " user login succesfuly", token: token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.get("/test", Auth, (req, res) => {
  res.send("test");
});

userRouter.get("/logout", Auth, (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).send({ message: "Log Out Successfully" });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.post("/password/forgot", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).send({ message: "user not found" });
  }

  //Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/users/password/reset/${resetToken}`;

  const message = `Your password reset token is :-\n\n ${resetPasswordUrl} \n\n
  if you are not requieset this email please ignore it `;

  try {

    await sendEmail({
      email:user.email,
      subject:"Ecommerce Password Recovary",
      message

    });

    res.status(200).send({message:`Email sent to ${user.email} successfully`})
    
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(401).send({message:error.message,error})


  }
});

module.exports = { userRouter };
