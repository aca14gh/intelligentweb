var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb');

var db = mongoose.connection;
db.once('open', function() {
   console.log("hi");
});

var r = require('../restaurant');

var one = new r.Restaurant({
    name: "hi",
    cuisine: "italian"
});

one.save(function(err, one) {
    if(err) return console.error(err);
});

//MAKE FAKE DATA FOR COLLECTION*