const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')
const englishWordsRouter = require("./routes/englishWordsRouter");
const { default: axios } = require("axios");
const authRouter = require("./routes/authRouter");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}))

app.use("/english", englishWordsRouter);
app.use("/auth", authRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(process.env.PORT, () => {
  console.log("server is running");
})


