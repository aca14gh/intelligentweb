var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb');

var db = mongoose.connection;
db.once('open', function() {
   console.log("hi");
});

var r = require('../restaurant');

var one = new r.Restaurant({
    name: "Bella",
    desc: "Sheffield number 1 italian",
    cuisine: "italian",
    street_no: "7",
    street_name: "street",
    postcode: "s13 8sb",
    phone: "01142387254",
    url: "url",
    lon: "12345",
    lat: "12345"
});

one.save(function(err, one) {
    if(err) return console.error(err);
});

