// require express
const express = require("express");

// create new instance of express
const app = express();

// require middleware
const bodyParser = require("body-parser");

// require cors
const cors = require("cors");

// require mongoose
const mongoose = require("mongoose");

// define local port
const PORT = 5000;

// add cors and bodyParser.json
app.use(cors());
app.use(bodyParser.json());

// make connection to MongoDB (mongo URI, config obj)
mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
// retrieve connection
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB connection established successfully");
});

// start up the server on defined port
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
