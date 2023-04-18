const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const userSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  phoneNo: String,
  email: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const user = mongoose.model("userPayment", userSchema);

module.exports = user;
