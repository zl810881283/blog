/**
 * Created by zl on 2015/8/29.
 */
var Article=require('../model/Article');

module.exports=function(req,res,next){
    Article.findHotTop(function(err,articles){
        if(err)
            return next(err);
        req.local.hotArticles=articles;
        next();
    });
}
