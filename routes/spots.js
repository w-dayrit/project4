var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Spot = require('../models/Spot');

var spotsController = require('../controllers/spotsController');

/* GET spots listing. */
router.get('/', spotsController.renderSpotIndex);

router.post('/', spotsController.createSpot);

module.exports = router;
