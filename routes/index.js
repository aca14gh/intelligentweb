var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');

var restaurant = require('../controllers/restaurant');

// POST request to update restaurant
//router.post('restaurant/:id/update', restaurant_controller.restaurant_update_post);

// GET request for one restaurant
//router.get('/restaurant/:id', restaurant_controller,restaurant_detail);

// GET request for finding relevant restaurants
router.get('/search_res', function(reg, res, next)  {
    res.render('search_res', { title: 'Your Search Results'});
});

// GET request for list of all restaurants
//router.get('/restaurants', restaurant_controller.restaurant_list);

/* GET restaurant page. */
router.get('/restaurant', function(req, res, next) {
    res.render('restaurant', { title: 'RESTAURANT' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'home' });
});


module.exports = router;


