/**
 * Created by zl on 2015/8/29.
 */
var Comment=require('../model/Comment');
var siteSetting=require('../setting/site');
var moment=require('moment-timezone');

module.exports=function(req,res,next){
    Comment.findNewest(function(err,comments){
        if(err)
            return next(err);
        for(var i in comments){
            var str = comments[i].content;
            if(str.length>siteSetting.commentSummaryLength)
                comments[i]._content = str.substr(0,siteSetting.commentSummaryLength)+" ……";
            else
                comments[i]._content = str;
            comments[i].meta._createAt = moment(comments[i].meta.createAt).format('M/D HH:mm');
        }
        req.local.newestComments=comments;
        next();
    });
}
