

var friendData = require("../data/friends");



module.exports = function(app) {



  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });




  app.post("/api/new", function(req, res) {

    var newfriend = JSON.parse(req.body.scores);
    var newScores = [];

    for (i = 0; i < newfriend.length; i++) {
      newScores.push(newfriend[i]);
    }

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: newScores
    };

    var originalArray = friendData;
    friendData.push(newFriend);

   
    var qNumber = 10;
    var Difference = [];

    var existingFriends = friendData.length - 1;

    for (j = 0; j < existingFriends; j++) {
      var friendsScore = friendData[j].scores;
      var difference = 0;

      for (b = 0; b < qNumber; b++) {
        var diff = newScores[b] - friendData[j].scores[b];
        diff = Math.abs(diff);
        difference = difference + diff;
      }
      Difference.push(difference);
    }
   
    var smallestDiff = Math.min.apply(0, Difference);

    var idx = Difference.indexOf(smallestDiff);
    var index = [];

    while (idx != -1) {
      index.push(idx);
      idx = Difference.indexOf(smallestDiff, idx + 1);
    }

    var lengthIndex = index.length;

    var random = Math.floor((Math.random() * lengthIndex));
    var value = index[random];

    res.json(originalArray[value]);
  });

};