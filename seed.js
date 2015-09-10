var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project4');

var User = require('./models/User');
var Spot = require('./models/Spot');

// callback-style
User.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All users removed...");
});

Spot.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All spots removed...");
});


// var newUsers = [
//   {
//     username: 'Will',
//     email: 'will@email.com',
//     wait_time: 25
//   },
//   {
//     username: 'Tiff',
//     email: 'tiff@email.com',
//     wait_time: 60
//   }
// ];

var newSpots = [
  {
    name: 'Wolf & Crane',
    address: '366 E 2nd St, Los Angeles, CA 90012'
  },
  {
    name: 'Omnia',
    address: '3570 S Las Vegas Blvd, Las Vegas, NV 89109'
  }
];

// promise-style
// User
//   .create(newUsers)
//   .then(
//     function(users) {
//       console.log(users.length + " users seeded.");
//     }, function(err) {
//       console.log(err);
//   });

Spot
  .create(newSpots)
  .then(
    function(spots) {
      console.log(spots.length + " spots seeded.");
    }, function(err) {
      console.log(err);
  });

function seedSpot(spotName, userName, userEmail, userWaitTime) {
  Spot.findOne({ name: spotName }).exec()
    .then(function (spot) {
      console.log("Found " + spotName);
      return User.create({
        username: userName,
        email: userEmail,
        wait_time: userWaitTime,
        spot: spot._id
      });
    });
}

User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
        seedSpot('Wolf & Crane', 'Will', 'will@email.com', 25);
        seedSpot('Wolf & Crane', 'Tiff', 'tiff@email.com', 35);
        seedSpot('Omnia', 'Angela', 'angela@email.com', 45);
        seedSpot('Omnia', 'Stella', 'stella@email.com', 55);
        seedSpot('Omnia', 'Peter', 'peter@email.com', 50);
    }
});



  // .then(function() {
  //   mongoose.disconnect();
  // });
