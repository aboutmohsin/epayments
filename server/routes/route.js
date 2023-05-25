const express = require("express");
const {
  addUser,
  getUser,
  uploadImage,
  getImage,
} = require("../controller/userController.js");
// const { uploadImage } = require("../controller/uploadImageController.js");

const router = express.Router();

// router.post("/add", addUser);
router.route("/add").post(addUser);
router.route("/upload").post(uploadImage);

// GET ROUTES
router.route("/all").get(getUser);
router.route("/getimage").get(getImage);

module.exports = router;
