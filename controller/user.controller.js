const express = require("express");
const gravatar = require("gravatar");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

//Load user model
const User = require("../model/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

//@routes      GET api/user;
//description  Tests user route;
//@access      Private;

router.get("/", async function (req, res) {
  const users = await User.find().lean().exec();
  return res.json({ users: users });
});

//@routes      GET api/user/register;
//description  register user;
//@access      Public;

router.post(
  "/register",
  body("name")
    .isLength({ min: 3, max: 10 })
    .withMessage("name is required and has to be at least 3 characters"),
  body("email").isEmail().withMessage("email is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password length must be at least 8 characters"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res.status(400).json({ email: "email already exists" });
    }

    const avatar = gravatar.url(req.body.email, {
      s: "200", //Size
      r: "pg", //Rating
      d: "mm", //Default
    });
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password,
    });

    const token = newToken(user);
    return res.status(201).json({ user, token });
  }
);

//@routes      GET api/user/login;
//description  Login user/returning jwt web token;
//@access      Public;

router.post(
  "/login",
  body("email").isEmail().withMessage("email is required"),
  body("password").isLength({ min: 8 }),
  async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    ///find user by email
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await user.checkPasswords(password);

    if (!match) {
      return res.status(400).json({
        status: "Failed",
        message: "Please provide correct email address and password",
      });
    }

    const token = newToken(user);
    return res.status(201).json({ user, token });
  }
);

module.exports = router;
