// import { express } from "express";
const express = require("express");
const Connection = require("./database/DB.js");

// Connection to database
Connection();

const app = express();
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server is running successfull on PORT: ${PORT}`)
);
