require("dotenv").config();
const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");

console.log(process.env.MONGO_URL);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on PORT NO:  ${port}`));