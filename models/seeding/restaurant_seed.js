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
    street_no:"",
    street_name:"",
    postcode:"",
    phone:"",
    url:"",
    lon:"",
    lat:""
});

one.save(function(err, one) {
    if(err) return console.error(err);
});

