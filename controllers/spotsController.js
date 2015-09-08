var Spot = require('../models/Spot');

var renderSpotIndex = function(req, res, next) {
  Spot.find({}, function (err, spots) {
    if (err) res.send(err);
    res.json(spots);
  })
}



module.exports = {
  renderSpotIndex: renderSpotIndex
}
