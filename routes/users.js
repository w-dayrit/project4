var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function (err, users) {
    if (err) res.send(err);
    res.json(users);
  })
});

module.exports = router;
