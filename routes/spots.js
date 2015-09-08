var express = require('express');
var router = express.Router();
var Spot = require('../models/Spot');

/* GET spots listing. */
router.get('/', function(req, res, next) {
  Spot.find({}, function (err, spots) {
    if (err) res.send(err);
    res.json(spots);
  })
});

module.exports = router;
