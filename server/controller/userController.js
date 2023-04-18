const express = require("express");

const addUser = (req, res) => {
  console.log("hello!");
  const user = req.body;
  console.log(user);
};

module.exports = { addUser };
