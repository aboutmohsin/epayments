// import { express } from "express";
const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./database/DB.js");
const Router = require("./routes/route.js");

dotenv.config();

// Connection to database
Connection();

app.use("/", Router);
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server is running successfull on PORT: ${PORT}`)
);
