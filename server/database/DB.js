const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Connection = async () => {
  const URL = `process.env.DATABASE`;
  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection established");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

module.exports = Connection;
