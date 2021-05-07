const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("restaurants");
});

router.get("/restaurants", (req, res) => {
  res.render("restaurants");
});
module.exports = router;