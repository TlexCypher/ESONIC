const express = require("express");
const mongoose = require("mongoose")
const englishWordsRouter = require("./routes/englishWordsRouter");
/* const authRouter = require("./routes/authRouter"); */
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/english", englishWordsRouter);
/*app.use("/auth", authRouter);*/


mongoose.connect(process.env.MONGODB_URL);


app.listen(process.env.PORT, () => {
  console.log("server is running");
})


