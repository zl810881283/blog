/**
 * Created by zl on 2015/8/20.
 */
var path = require('path');

var siteSetting={};
siteSetting.siteName="乐呵一贝子";
siteSetting.allNeedSignin=true;
siteSetting.hotTopNum=10;
siteSetting.summaryLength=200;
siteSetting.autoJumpTime=3;

siteSetting.dataPath=process.env.OPENSHIFT_DATA_DIR
    || path.join(__dirname, '../','public');

module.exports=siteSetting;