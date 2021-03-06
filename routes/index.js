const express = require("express");
const { isAuthenticated } = require("../helpers/auth");
const router = express.Router();
const Coches = require('../models/coches');



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
router.get("/admin", isAuthenticated, async(req, res) => {
  res.render('admin/admin', {
    layout: 'back',
  })
});
router.get("/tables", isAuthenticated, async(req, res) => {
  try {
    const coches = await Coches.find({}).lean()
    res.render('admin/tables', {
        layout: 'back',
        coches,
    })
} catch (err) {
    console.error(err)
    res.render('/error/500')
}
});
router.get("/charts", isAuthenticated, async(req, res) => {
  res.render('admin/charts', {
    layout: 'back',})
});
router.get("/add", isAuthenticated, async(req, res) => {
  res.render('admin/add', {
    layout: 'back',})
});


router.get('/coche/:_id', async(req, res) => {
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


router.post('/', isAuthenticated, async(req, res) => {
  try {
      
      await Coches.create(req.body)
      res.redirect('/admin')

  } catch (err) {
      console.error(err)
      res.render('error/500')
  }
})

module.exports = router;