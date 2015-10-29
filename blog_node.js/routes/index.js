var express = require('express');
var router = express.Router();
var moment=require('moment-timezone');

var Article=require('../model/Article');
var Comment=require('../model/Comment');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/article/list/1');
});

router.get('/signin',function(req,res,next){
  req.local.title='用户登录';
  res.render('sign/signin',req.local);
});

router.get('/signup',function(req,res,next){
  req.local.title='用户注册';
  res.render('sign/signup',req.local);
});

module.exports = router;
