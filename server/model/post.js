const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const postSchema = mongoose.Schema({
  myFile: String,
});

const Post = mongoose.model("EasypiasPayment", postSchema);

module.exports = Post;
