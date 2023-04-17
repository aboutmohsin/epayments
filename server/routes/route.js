const express = require("express");

const router = express.router();

router.post("/add", () => {
  console.log("Hello!");
});

module.exports = router;
