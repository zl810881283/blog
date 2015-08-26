var express = require('express');
var router = express.Router();
var moment=require('moment-timezone');

var siteSetting=require('../setting/site');
var Article=require('../model/Article');
var Comment=require('../model/Comment');

function delHtmlTag(str)
{
  return str.replace(/<[^>]+>/g,"");
}

function genSummary(str){
  var str=delHtmlTag(str);
  if(str.length>siteSetting.summaryLength)
    return str.substr(0,siteSetting.summaryLength)+" ……";
  else
    return str;

}

/* GET home page. */
router.get('/', function(req, res, next) {
  req.local.title='首页';
  Article.fetchAndPopulate(function(err,articles){
    if(err)
      return next(err);
    articles.forEach(function(article){
      var createAt=moment(article.meta.createAt);

      article.meta._createAt=createAt.format('l');
      article.meta._createAtMonth=createAt.month()+1+"月";
      article.meta._createAtDay=createAt.format('DD');

      article.meta._updateAt=moment(article.meta.updateAt).format('l');

      article._content=genSummary(article.content);
      article._picturePath=article.picturePath.replace(/^\w+\//,"");
    })
    req.local.articles=articles;

    Article.findHotTop(function(err,hotArticles){
      if(err)
        return next(err);
      req.local.hotArticles=hotArticles;
      res.render('index', req.local);
    })

  })
});

router.get('/signin',function(req,res,next){
  req.local.title='用户登录';
  res.render('sign/signin',req.local);
})

router.get('/signup',function(req,res,next){
  req.local.title='用户注册';
  res.render('sign/signup',req.local);
})

module.exports = router;
