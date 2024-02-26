const express = require("express");
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const cors = require('cors')
const englishWordsRouter = require("./routes/englishWordsRouter");
const { default: axios } = require("axios");
/* const authRouter = require("./routes/authRouter"); */
const dotenv = require("dotenv").config();

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: process.env['GOOGLE_AUTH_CALLBACK'],
  passReqToCallback: true,
}, function(req, accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    return done(null, profile)
  })
}))

//middleware to verify authentication of user.
//auth routers should be made.
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    //if failed, go back to initial login endpoit.
  }
}

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}))
app.use("/english", englishWordsRouter);

/*app.use("/auth", authRouter);*/


mongoose.connect(process.env.MONGODB_URL);


app.listen(process.env.PORT, () => {
  console.log("server is running");
})


