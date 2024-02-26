const mongoose = require("mongoose");

const englishWord = new mongoose.Schema({
  username: String,
  englishContent: String,
  japaneseMeaning: String,
});


const EnglishWordModel = mongoose.model('English', englishWord);

module.exports = EnglishWordModel;
