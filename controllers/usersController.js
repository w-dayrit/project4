var User = require('../models/User');

var renderUserIndex = function(req, res, next) {
  User.find({}, function (err, users) {
    if (err) res.send(err);
    res.json(users);
  })
}



module.exports = {
  renderUserIndex: renderUserIndex
}
