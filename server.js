//require npm packages express, mongoose, and morgan
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const { db } = require("./models/workout.js");
require("dotenv").config();

//creating Port
const PORT = process.env.PORT || 3000;

//setting up express app
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
console.log(MONGODB_URI);

//setting up middleware for express
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes")(app);

//listen on Port
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});