var Spot = require('../models/Spot');

var renderSpotIndex = function(req, res, next) {
  Spot.find({}).populate('users').exec(function (err, spots) {
    if (err) res.send(err);
    res.json(spots);
  });
};

var createSpot = function(req, res, next) {
  var spot = new Spot(req.body);

  spot.save(function(err) {
    if(err) res.json({message: 'Could not save spot. Error: ' + err});

    res.json({spot: spot});
  });
}


module.exports = {
  renderSpotIndex: renderSpotIndex,
  createSpot: createSpot
}
