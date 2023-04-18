const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const userSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  phoneNo: String,
  email: String,
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, "userpayment");

const user = mongoose.model("userpayment", userSchema);

module.exports = user;
