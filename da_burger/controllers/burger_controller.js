var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

//router.post

//router.put

//router.delete

module.exports = router;