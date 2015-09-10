var express = require('express');
var router = express.Router();
var User = require('../models/User');

var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.renderUserIndex);

module.exports = router;
