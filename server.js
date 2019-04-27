// require express
const express = require("express");

// create new instance of express
const app = express();

// require middleware
const bodyParser = require("body-parser");

// require cors
const cors = require("cors");

// define local port
const PORT = 5000;

// add cors and bodyParser.json
app.use(cors());
app.use(bodyParser.json());

// start up the server on defined port
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
