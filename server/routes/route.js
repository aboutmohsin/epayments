const express = require("express");
const { addUser } = require("../controller/userController.js");

const router = express.Router();

// router.post("/add", addUser);
router.route("/add").post(addUser);

module.exports = router;
