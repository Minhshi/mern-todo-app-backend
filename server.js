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

// get access to express router
const todoRoutes = express.Router();

// define local port
const PORT = 5000;

// import todo model
const todoSchema = require("./models/Todo");

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

// routes
todoRoutes.route("/").get(function(req, res) {
  todoSchema.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get(function(req, res) {
  const id = req.params.id;
  todoSchema.findById(id, function(err, todo) {
    res.json(todo);
  });
});

todoRoutes.route("/new").post(function(req, res) {
  const todo = new todoSchema(req.body);

  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: "Todo added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new Todo failed");
    });
});

todoRoutes.route("/edit/:id").post(function(req, res) {
  todoSchema.findById(req.params.id, function(err, todo) {
    if (!todo) {
      res.status(404).send("Data is not found");
    } else {
      todo.title === req.body.title;
      todo.description === req.body.description;
      todo.completed === req.body.completed;
    }

    todo
      .save()
      .then(todo => {
        res.json("Todo updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

// make use of router(url extension, router)
app.use("/todos", todoRoutes);

// start up the server on defined port
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
