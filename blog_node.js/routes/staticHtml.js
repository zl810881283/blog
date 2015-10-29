/**
 * Created by zl on 2015/8/8.
 */
var express = require('express');
var authority= require('../filter/authority');


var router = express.Router();


router.get('/:path',function(req,res,next){

    res.render(req.params.path);
});



router.get('/test/:path',authority,function(req,res,next){

    console.log('===================all==================');
    try{
        for(var item in req){
            console.log(item+" => "+req[item]);
        }
    }catch(e){

    }

    //POST form body
    console.log('==================body==================');
    for(var item in req.body){
        console.log(item+" => "+req.body[item]);
    }

    //GET params like /detail/:aid
    console.log('=================params=================');
    for(var item in req.params){
        console.log(item+" => "+req.params[item]);
    }

    //GET query like /list?page=1
    console.log('==================query=================');
    for(var item in req.query){
        console.log(item+" => "+req.query[item]);
    }
    console.log('=================session================');
    for(var item in req.session){
        console.log(item+" => "+req.session[item]);
    }
    console.log('==================cookie=================');
    for(var item in req.session.cookie){
        console.log(item+" => "+req.session.cookie[item]);
    }
    console.log('==================cookie=================');
    console.log(req.session.cookie.toJSON());
    next();
});

router.get('/addSession',function(req,res,next){
    req.session.user='zhangle';
    req.session.cookie.user='zhangle';
    next();
})

module.exports=router;