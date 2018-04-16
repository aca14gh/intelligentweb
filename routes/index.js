var express = require('express');
var router = express.Router();

/* GET home page. */


/* GET home page. */

var words = ["Search...", "Keyword", "Restraunt Name", "Cuisine i.e.Chinese", "postcode"];

var jeff = pickWord(words);

function pickWord(wordsArray) {
    var rand = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var pickedWord = wordsArray[rand];
    return pickedWord;
}

router.get('/', function(req, res, next) {
    res.render('Index', { jeff: jeff, title: 'My Class' });
});


/* GET restaurant page. */
router.get('/restaurant', function(req, res, next) {
    res.render('restaurant', { title: 'RESTAURANT' });
});



/* GET home page. */
router.get('/welcome', function(req, res, next) {
    res.render('welcome', { title: 'COM3504' });
});

module.exports = router;
