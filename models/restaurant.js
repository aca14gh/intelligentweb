var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, max: 100},
        cuisine: {type: String, required: true, max: 100},
        street: {type: String},
        postcode: {type: String},
        phone: {type: Number}

    });

//Export model
module.exports = {
    Restaurant: mongoose.model('Restaurant', restaurantSchema)
}