// import { express } from "express";
const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./database/DB.js");
const Router = require("./routes/route.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();

// Connection to database
Connection();

//Routes
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET,POST,PUT,DELETE"],
//   })
// );
app.use(cors());
app.options("*", cors());
app.use("/", Router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server is running successfull on PORT: ${PORT}`)
);
