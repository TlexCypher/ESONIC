const mongoose = require("mongoose");

const englishWord = new mongoose.Schema({
  englishContent: String,
  japaneseMeaning: String,
});


const EnglishWordModel = mongoose.model('English', englishWord);

module.exports = EnglishWordModel;
