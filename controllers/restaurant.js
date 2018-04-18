const models = require('../models/restaurant');

// noinspection JSAnnotator
module.exports = {

    findRest: function(req, res, next)  {
        models.Restaurant.find(function (err, results)  {
            if (err) {
                return console.error(err);
            }
            console.log(results);
            if(results !== null)  {
                res.render(results);
            }
            else  {
                res.render('home', {foundRest: false, error: "cannot find details"});
            }
        });
    }
};
