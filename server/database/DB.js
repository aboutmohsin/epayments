const mongoose = require("mongoose");

const connection = async () => {
  const URL = `mongodb+srv://payment:payment@cluster0.qkth7x9.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("Error whiel connecting with the database", error);
  }
};

export default connection;
