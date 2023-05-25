const express = require("express");
const User = require("../model/user-schema.js");
const Post = require("../model/post.js");

const addUser = async (req, res) => {
  // res.status(200).send({ message: "Add user route" });
  console.log("hello!");
  const user = req.body;
  // console.log(user);

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
const uploadImage = async (req, res) => {
  const body = req.body;
  try {
    const newImage = await Post.create(body);
    newImage.save();
    res.status(201).json({ msg: "New Image Uploaded successfully" });
  } catch (error) {
    res
      .status(409)
      .json({ msg: "Error uploading image", message: error.message });
  }
};
const getImage = async (req, res) => {
  console.log("get image");
  try {
    const image = await Post.findOne({});
    res.status(200).json(image);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { addUser, getUser, uploadImage, getImage };
