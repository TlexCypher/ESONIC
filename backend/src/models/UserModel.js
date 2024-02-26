const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", user);

module.exports = UserModel;
