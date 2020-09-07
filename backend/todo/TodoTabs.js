var mongoose = require("mongoose");

var TodoTabsSchema = new mongoose.Schema({
  state: Number,
  label: String,
});
module.exports = mongoose.model("TodoTabs", TodoTabsSchema, "todo_tabs");

// module.exports = mongoose.model('User');
