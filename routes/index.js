var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var restaurant = require('../controllers/restaurant');

// POST request to update restaurant
//router.post('restaurant/:id/update', restaurant_controller.restaurant_update_post);

// GET request for one restaurant
//router.get('/restaurant/:id', restaurant_controller,restaurant_detail);

// GET request for list of all restaurants
//router.get('/restaurants', restaurant_controller.restaurant_list);

/* GET restaurant page. */
router.get('/restaurant', function(req, res, next) {
    res.render('restaurant', { title: 'RESTAURANT' });
});

/* GET home page. */
router.get('/welcome', function(req, res, next) {
    res.render('welcome', { title: 'COM3504' });
});

router.post('/list',restaurant.list);

module.exports = router;


