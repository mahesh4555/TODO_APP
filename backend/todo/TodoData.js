var mongoose = require("mongoose");
var TodoDataSchema = new mongoose.Schema({
  currentState: Number,
  name: String,
  content: String,
});
module.exports = mongoose.model("TodoData", TodoDataSchema, "todo_data");
