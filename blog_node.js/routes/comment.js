/**
 * Created by zl on 2015/8/21.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;

var Comment=require('../model/Comment');

router.post('/add',function(req,res,next){
    req.body.comment.author=req.session.user._id;

    if(!req.body.comment.reply)
        delete req.body.comment.reply;

    var comment=new Comment(req.body.comment);

    comment.save(function(err){
        if(err)
            return next(err);
        res.redirect('/article/detail/'+req.body.comment.article);
    });
});

module.exports=router;