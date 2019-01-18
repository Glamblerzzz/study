var express = require('express');
var router = express.Router();
var Test = require('../services/testService')
var test = new Test()
/* GET home page. */
// 放入页面
router.get('/', function(req, res) {
  var path = __dirname.substring(0,__dirname.length-7) + '/public/index.html'
  res.sendFile(path);
});
router.get('/Interface/update', function (req, res, next) {
  test.testEdit((result)=>{
    res.json({res: result})
  })
});
router.get('/Interface/add', function (req, res, next) {
  test.testAdd((result)=>{
    res.json({res: result})
  })
});
router.get('/Interface/select', function (req, res, next) {
  test.testSelect((result)=>{
    res.json({res: result})
  })
});
router.get('/Interface/delete', function (req, res, next) {
  test.testDelete((result)=>{
    res.json({res: result})
  })
});

module.exports = router;