/* This file is written to handle the backend api around authorization.
 * But this file is almost empty, because we don't know how to divide process for each user.
 * After understanding this, I'll write this file.
 * */
const express = require("express");
const authRouter = express.Router();

module.exports = authRouter;

/* Api for registering new user into db. */
authRouter.post("/register", (req, res) => {

});

/* Api for handling login of existing user. */
authRouter.post("/login", (req, res) => {

});

/* Api for handling logout of existing user. */
authRouter.post("/logout", (req, res) => {

});
