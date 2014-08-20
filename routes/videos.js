var express = require('express');
var router = express.Router();

/* GET tabs listing. */
router.get('/', function(req, res) {
  res.render('videos', { title: 'Ukeula', page: 'Videos', category: req.query.category, desc: categoryDescription(req.query.category) });
});

module.exports = router;

function categoryDescription(category) {
	switch(category) {
		case 'easy':
			return 'Piece of cake';
		case 'medium':
			return "Let's try";
		case 'hard':
			return 'Tough';
		default:
			return 'Videos';
	}
}