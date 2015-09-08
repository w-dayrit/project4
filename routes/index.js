var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', usersController.renderUserIndex);

module.exports = router;
