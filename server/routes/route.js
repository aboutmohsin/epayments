const express = require("express");
const { addUser, getUser } = require("../controller/userController.js");

const router = express.Router();

// router.post("/add", addUser);
router.route("/add").post(addUser);
router.route("/all").get(getUser);

module.exports = router;
