var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('inhaler', { title: 'Search Results inhaler' });
});

module.exports = router;