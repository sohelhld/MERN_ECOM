const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
require("dotenv").config();

const Auth = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log({ token , line: "0"});
    if (!token)
      return res.status(401).send({ message: "user is not authinticated " });

    const isTokenCorrect = await jwt.verify(token, process.env.jwt_secret);
    if (!isTokenCorrect)
      return res.status(401).send({ message: "token is not correct" });
    req.body.email = isTokenCorrect.email;
    req.body.name = isTokenCorrect.name;
    req.body.userId = isTokenCorrect.userid;
    req.user = await userModel.findById(isTokenCorrect.id);

    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(401)
        .send({
          message: `Role:${req.user.role} is not allowed to access this resource`,
        });
    }
    next();
  };
};


module.exports = { Auth, authorizeRoles };


