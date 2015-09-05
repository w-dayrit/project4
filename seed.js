var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project4');

var User = require('./models/User');

// callback-style
User.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All users removed...");
});

var newUsers = [
  {name: 'User A'},
  {name: 'User B'}
];

// promise-style
User
  .create(newUsers)
  .then(
    function(users) {
      console.log(users.length + " users seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
