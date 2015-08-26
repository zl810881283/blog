/**
 * Created by zl on 2015/8/15.
 */
var User=require('../model/User');

module.exports=function(req,res,next){

    console.log('begin to validate the authority');

    var _user=req.session.user;

    if(!_user){
        res.redirect('/signin');
        return;
    }

    //TODO: validate the authority
    //TODO: validate the modify article authority
    next();

};