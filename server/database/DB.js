const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Connection = async () => {
  const URL = `mongodb+srv://payment:payment@cluster0.qkth7x9.mongodb.net/EPAYMENTS?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection established");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

module.exports = Connection;
