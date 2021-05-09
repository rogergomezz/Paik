const express = require("express");
const router = express.Router();
const Coches = require('../models/coches');

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", async(req, res) => {
    try {
        const coches = await Coches.find().lean()

        res.render('coches', {
            coches
        })
        console.log(coches);
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
});

router.get("/coches", (req, res) => {
  res.render("coches");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;