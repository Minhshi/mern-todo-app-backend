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
module.exports = mongoose.model("todos", todoSchema)
// mongoose.model("todos", todoSchema);
