var express = require("express");

var router = express.Router();

var Burger = require("../models/burger_model.js");

router.get("/", function(req, res) {
    Burger.findAll().then(function(data){
      res.render("index", data);
    });
  });

  router.post("/api/burger", function(req, res) {
    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, 
      function(result) {

     return res.json(result)
  });
})
  
  router.delete("/api/burger/:id", function(req, res) {
    Burger.destroy({
      where : {
        id: req.params.id
      }
    })
  });
  
  module.exports = router;