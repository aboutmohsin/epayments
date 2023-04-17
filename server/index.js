// import { express } from "express";
const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./database/DB.js");

// Connection to database
Connection();

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server is running successfull on PORT: ${PORT}`)
);
