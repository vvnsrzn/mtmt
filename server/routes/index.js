var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.json({
  //   'message': 'yolo'
  // });
  res.sendFile('index.html', {
    root: '../server/public'
  });

});

module.exports = router;