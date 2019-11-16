const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./server/database.js");
const mongoose = require("mongoose");
const userRouter = require("./src/user.js");
require('dotenv').config();

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-htexd.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
  .then(() => {
    console.log("Database access success!");
    listen();
  })
  .catch( err => {
    console.log("err0r happened", err);
  });

  app.use(userRouter);

app.post("/hello",(req, res) => {
  res.send("hello");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.get("/products/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.use(express.static("dist"));



function listen() {
  //heroku
  app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`);
  });
}
