var express = require('express');
var router = express.Router();

/* GET introduction page. */
router.get('/', function(req, res, next) {
  res.render('introduction');
});

module.exports = router;