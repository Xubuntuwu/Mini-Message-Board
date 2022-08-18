var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new_message', { title: 'Mini Messageboard' });
});

module.exports = router;
