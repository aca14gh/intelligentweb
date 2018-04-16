var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restaurant = new Schema(
    {
        name: {type: String, required: true, max: 100},
        cuisine: {type: String, required: true, max 100},
        street: {type: String},
        postcode: {type: String},
        phone: {type: Number}

    } );


// Virtual for restaurants name
RestaurantSchema
    .virtual('name')
    .get(function ()  {
        return this.name;
    });

// Virtual for restaurants URL
RestaurantSchema
    .virtual('url')
    .get(function()  {
        return '/catalog/restaurant/' + this._id;
    });

//Export model
model.exports = mongoose.model('Restaurant', RestaurantSchema);