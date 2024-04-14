/* This file is written to handle the backend api around authorization.
 * But this file is almost empty, because we don't know how to divide process for each user.
 * After understanding this, I'll write this file.
 * */
const express = require("express");
const UserModel = require("../models/UserModel");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports = authRouter;

const getHasBeenRegistered = async (username, password) => {
  const allDocs = await UserModel.find();
  for (let i = 0; i < allDocs.length; i++) {
    const doc = allDocs[i];
    const _hashedPassword = doc.password;
    const _username = doc.username;
    let isMatchedPassword = bcrypt.compareSync(password, _hashedPassword)
    if (_username === username && isMatchedPassword) {
      return true;
    }
  }
  return false;
}

/* Api for registering new user into db. */
authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  /*TODO: should be changed */
  const hasBeenRegistered = await getHasBeenRegistered(username, password)
  if (hasBeenRegistered) {
    res.status(400).send("You have been already registered.");
    return;
  } else {
    /* hash password. */
    const hashedPassword = bcrypt.hashSync(password, 10)
    await UserModel.create({ username: username, email: email, password: hashedPassword })
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({
      username
    },
      jwtSecretKey,
      {
        "expiresIn": "1h"
      }
    );
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 })
    res.status(200).json({
      token: token
    })
  }
});

/* Api for handling login of existing user. */
authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const hasBeenRegistered = await getHasBeenRegistered(username, password)
  if (!hasBeenRegistered) {
    res.status(400).send("Can't find such user.");
    return;
  } else {
    /*jwt flow*/
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({
      username
    },
      jwtSecretKey,
      {
        "expiresIn": "1h"
      }
    );
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 })
    res.status(200).json({
      token: token
    })
  }
});

/* Api for handling logout of existing user. */
authRouter.post("/logout", (req, res) => {
  res.clearCookie('jwt', { httpOnly: true })
  res.status(200).json({
    msg: "HTTPOnly Cookie clear."
  })
});
