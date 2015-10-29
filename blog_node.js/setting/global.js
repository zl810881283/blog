/**
 * Created by zl on 2015/8/20.
 */
var path = require('path');

var globalSetting={};

//网站名字
globalSetting.siteName="乐呵一贝子";
//是否访问所有网站都需要登录
globalSetting.allNeedSignin=true;
//最热文章榜大小
globalSetting.hotTopSize=10;
//文章概要长度
globalSetting.summaryLength=200;
//评论概要长度
globalSetting.commentSummaryLength=20;
//分页大小
globalSetting.pageSize=10;
//分页导航栏大小
globalSetting.pageNavSize=5;
//自动跳转时间（秒）
globalSetting.autoJumpTime=3;
//css js 静态资源使用CDN
globalSetting.useCDN=true;
//使用SyntaxHighlighter 代码高亮
globalSetting.useSyntaxHighlighter=false;
//数据存储位置
globalSetting.dataPath=process.env.OPENSHIFT_DATA_DIR
    || path.join(__dirname, '../','public');

module.exports=globalSetting;