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

router.get("/contact", async(req, res) => {
  res.render("contact")

});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.get('/:_id', async(req, res) => {
  try {
      const coche = await Coches.findById(req.params._id).lean()
      res.render('coche', {
          coche
      })
      console.log(coche)
  } catch (err) {
      console.error(err)
      res.render('error/500')
  }
})

module.exports = router;