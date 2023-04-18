const express = require("express");
const User = require("../model/user-schema.js");

const addUser = async (req, res) => {
  console.log("hello!");
  const user = req.body;
  //   console.log(user);

  const newUser = new User(user);
  //   console.log(newUser);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  console.log("get user");
  try {
    const user = await User.findOne({});
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { addUser, getUser };
