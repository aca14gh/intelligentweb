var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: '',
            required: 'Please fill Restaurant name',
            max: 100,
            trim: true
        },
        desc: {
            type: String,
            default: 'description is here'
        },
        cuisine: {
            type: String,
            required: 'Enter type of cuisine',
            max: 100
        },
        street_no: {
            type: Number
        },
        street_name: {
            type: String,
            required: true,
            max: 100
        },
        postcode: {
            type: String,
            required: true,
            max: 100
        },
        phone: {
            type: Number
        },
        url: {
            type: String,
            required: true,
            max:100
        },
        lon: {
            type: String
        },
        lat: {
            type: String
        }
    });

//Export model
module.exports = {
    Restaurant: mongoose.model('Restaurant', RestaurantSchema)
};
