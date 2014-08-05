var express = require('express');
var router = express.Router();

/* GET tabs listing. */
router.get('/', function(req, res) {
  res.render('tabs', { title: 'Ukeula', page: 'Tabs' });
});

module.exports = router;
