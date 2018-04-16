var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

/* GET home page. */


/* GET home page. */

var words = ["Search...", "Keyword", "Restraunt Name", "Cuisine i.e.Chinese", "postcode"];
var character = require('../controllers/characters');

var jeff = pickWord(words);

function pickWord(wordsArray) {
    var rand = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var pickedWord = wordsArray[rand];
    return pickedWord;
}

router.get('/', function(req, res, next) {
    res.render('Index', { jeff: jeff, title: 'My Class' });
});



/* GET home page. */
router.get('/insert', function(req, res, next) {
    res.render('insert', { title: 'My Form' });
});
router.post('/insert',character.insert);

module.exports = router;
