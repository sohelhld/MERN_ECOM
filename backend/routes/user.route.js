const express = require("express");
const { userModel } = require("../models/userModel");
const { Auth, authorizeRoles } = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const userRouter = express.Router();

//SignUp
userRouter.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const isUserPresent = await userModel.findOne({ email });
    if (isUserPresent) {
      return res
        .status(400)
        .send({ message: "User is already present plz login" });
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

//Login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUserPresent = await userModel
      .findOne({ email })
      .select("+password");
    if (!isUserPresent) {
      return res
        .status(400)
        .send({ message: "User is not register plz signup 1st" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserPresent.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "User password is not Correct" });
    }

    const token = jwt.sign({ id: isUserPresent._id }, process.env.jwt_secret, {
      expiresIn: "1hr",
    });

    res.cookie("token", token);

    res.status(200).send({ message: "user login succesfuly", token: token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//Logout
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

//Forgot Password and sending mail
userRouter.post("/password/forgot", async (req, res) => {
  const user = await userModel.findOne({ email: email });

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
      email: user.email,
      subject: "Ecommerce Password Recovary",
      message,
    });

    res
      .status(200)
      .send({ message: `Email sent to ${user.email} successfully` });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(401).send({ message: error.message, error });
  }
});

//Reset Password
userRouter.put("/password/reset/:token", async (req, res) => {
  const { password, confirmPassword } = req.body;
  try {
    // Creating Token Hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await userModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Reset Password Token is invalid or expired" });
    }

    const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      expiresIn: "1hr",
    });

    res.cookie("token", token);

    if (password !== confirmPassword) {
      return res
        .status(404)
        .send({ message: "Reset Password dose not match confirm password" });
    }

    const hash = await bcrypt.hash(password, 8);

    user.password = hash;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).send({ Token: token });
  } catch (error) {
    res.status(401).send({ message: error.message, error });
  }
});

//get User Details
userRouter.get("/me", Auth, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    console.log(req.user.id);
    res.status(200).send({ message: "User Details", user });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Update Password
userRouter.put("/password/update", Auth, async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  try {
    const user = await userModel.findById(req.user.id).select("+password");

    // const isPasswordMatched = await user.comparePassword(oldPassword);
    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatched) {
      return res.status(400).send({ message: "Old Password is incorrect" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).send({ message: "Password does not match" });
    }

    //set token
    const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
      expiresIn: "1hr",
    });

    res.cookie("token", token);

    const hashPassword = await bcrypt.hash(newPassword, 8);

    user.password = hashPassword;

    await user.save();

    res.status(200).send({ user, token: token });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Update User Profile
userRouter.put("/me/update", Auth, async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUserData = {
      name: name,
      email: email,
    };

    //we will add cloudinary later

    const user = await userModel.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).send({ message: "profie is updated" });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

//Get All users---admin
userRouter.get("/admin/users",Auth,authorizeRoles("admin"), async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).send({ message: "All user", users });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

// Get Single user---admin
userRouter.get("/admin/users/:id",Auth,authorizeRoles("admin"),async(req,res)=>{
  try {
    const user  = await userModel.findById(req.params.id);
    if(!user){
      return res.status(400).send({message:"User Dose Not Exiset"})
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
})

// Upadate User ROle ----admin
userRouter.put("/admin/users/:id",Auth,authorizeRoles("admin"),async(req,res)=>{
  try {
    const newUserData = {
      name:req.body.name,
      email:req.body.email,
      role:req.body.role
    }

   const user=  await userModel.findByIdAndUpdate(req.params.id,newUserData,{
      new:true,
      runValidators:true,
      useFindAndModify:false
    })

    res.status(200).send(user)
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
})

//Delete User --- admin
userRouter.delete("/admin/users/:id",Auth,authorizeRoles("admin"),async(req,res)=>{
  try {
    const user  = await userModel.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(400).send({message:"User Dose Not Exiset"})
    }

    // work to do here

    // await user.remove()

    res.status(200).send({message:"User is successfully removed"})
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
})

module.exports = { userRouter };
