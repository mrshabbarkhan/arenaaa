const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const adminProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // GET TOKEN FROM REQUEST

      token = req.headers.authorization.split(" ")[1];

      // VERIFY TOKEN

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // GET USER FROM DB USING TOKENS ID
      req.user = await User.findById(decoded.id).select("-password");

      if (req.user.isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error("Not Authorized || Admin Only");
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized || Token Invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized ||No Token Found");
  }
});

module.exports = { adminProtect };
