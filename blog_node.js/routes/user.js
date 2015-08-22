var express = require('express');
var router = express.Router();
var User=require('../model//User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//show the user detail
router.get('/detail/:uid', function(req, res, next) {
  var uid=req.params.uid;
  //TODO: show the user detail
});

router.post('/signup',function(req,res,next){
  var _user=req.body.user;
  User.findByName(_user.name,function(err,user){
    if(err){
      console.log(err);
      return next(err);
    }
    if(user){
      console.log("username "+user.name+" has used!");

    }else{
      var user =new User({
        name:_user.name,
        password:_user.password,
        email:_user.email,
        nickname:_user.nickname
      });
      user.save(function(err){
        if(err)
          return next(err);
        req.session.user=user;
        res.redirect('/');
      });
    }
  })
});

router.post('/signin',function(req,res,next){
  var _user=req.body.user;
  User.findByName(_user.name,function(err,user){
    if(err){
      console.log(err);
      return next(err);
    }

    if(!user){
      console.log('no this user '+_user.name+' !');
    }else{
      if(user.password !==_user.password){
        console.log('user '+_user.name+' password worry!');
      }else{
        req.local.user=req.session.user=user;
        console.log('user '+_user.name+' sign in successfully!');
        res.render('sign/signinSuccess',req.local);
      }
    }
  });
});

router.get('/signout',function(req,res,next){
  delete req.session.user;
  res.render('sign/signoutSuccess',req.local);
})
module.exports = router;
