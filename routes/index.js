const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("coches");
});

router.get("/coches", (req, res) => {
  res.render("coches");
});
module.exports = router;