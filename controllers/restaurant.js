const models = require('../models/restaurant');

// noinspection JSAnnotator
//module.exports = {

exports.list = function(reg, res)  {
    Restaurant.find().sort('-created').populate('cuisine').exec(function(err, restaurants)  {
        if (err)  {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        else  {
            res.jsonp(restaurants);
        }
    });
};
