var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restaurant = new Schema(
    {
        _id: ObjectId,
        name: {type: String, required: true, max: 100},
        cuisine: {type: String, required: true, max 100},
        street: {type: String},
        postcode: {type: String},
        phone: {type: Number}

    } );




var restaurantModel = mongoose.model('Restaurant', Restaurant ); module.exports = restaurantModel;