const mongoose = require("mongoose");
// const Schema = mongoose.Schema
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean
});

// export schema
// module.exports = mongoose.model(model name, schema)
mongoose.model("todos", todoSchema);
