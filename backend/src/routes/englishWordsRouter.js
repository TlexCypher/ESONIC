const express = require("express");
const EnglishWordModel = require("../models/EnglishWordModel");
const englishWordsRouter = express.Router();

/* Api for adding new english word to database. */
englishWordsRouter.post("/addNewWord", async (req, res) => {
  const { englishContent, japaneseMeaning } = req.body;
  try {
    const result = await EnglishWordModel.findOne({ englishContent: englishContent });
    if (result) {
      return res.status(400).send("This word is already registered.");
    } else {
      const newEnglishWord = {
        englishContent: englishContent,
        japaneseMeaning: japaneseMeaning,
      };
      const englishWord = await EnglishWordModel.create(newEnglishWord);
      res.status(200).json(englishWord);
    }
  } catch (error) {
    res.status(403).send("Internal Server Error. This error from addNewWord endpoint.");
  }
});

/* Api for getting all english words that are already registered. */
englishWordsRouter.get("/allWords", async (req, res) => {
  try {
    const englishWords = await EnglishWordModel.find({});
    if (!englishWords) {
      return res.status(404).send("No word is registered.");
    }
    res.status(200).json(englishWords);
  } catch (error) {
    res.status(403).send("Internal Server Error. This error from allWords endpoint.");
  }
});


/* Api for deleting english words from id. */
englishWordsRouter.delete("/deleteWord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await EnglishWordModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(403).send("Failed to delete.");
    }
    res.status(200).send({
      msg: "Success to delete."
    });
  } catch (error) {
    res.status(403).send("Internal Server Error. This error from deleteWord/:id endpoint.")
  }
});

/* Api for examining user. 
 * User request variable, req has the property, how many words choose from database, and make the exam.
 * So we should handle the case, for instance, user request 50 words, but database has only 20 words.
 * App should say this fact to user, and we should min(number_in_database, number_requested_by_user).
 */
englishWordsRouter.get("/takeExam/:numOfWordsFromUser", async (req, res) => {
  const { numOfWordsFromUser } = req.params;
  const allWords = await EnglishWordModel.find({});
  const numOfWordsInDB = allWords.length;
  if (numOfWordsFromUser > numOfWordsInDB) {
    res.status(203).json({
      msg: `Sorry, we have only ${numOfWordsInDB} words. So all words in DB would be adopted.`,
      testData: allWords
    });
  } else {
    const getRandomNumber = (total) => {
      return Math.floor(Math.random() * total);
    }
    const getRandomSelectedWords = (count, allWords) => {
      let hashSet = new Set();
      let randomSelectedWords = [];
      const total = allWords.length;
      while (count > 0) {
        const index = getRandomNumber(total);
        if (hashSet.has(index)) continue;
        hashSet.add(index);
        randomSelectedWords.push(allWords[index]);
        count--;
      }
      return randomSelectedWords;
    }
    res.status(200).json({
      msg: `Enough words we have. So randomly selected ${numOfWordsFromUser} words.`,
      testData: getRandomSelectedWords(numOfWordsFromUser, allWords),
    });
  }
});
module.exports = englishWordsRouter;


