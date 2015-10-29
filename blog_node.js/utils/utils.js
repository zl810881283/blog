/**
 * Created by zl on 2015/10/29.
 */

var globalSetting = require('../setting/global');

function delHtmlTag(str) {
    return str.replace(/<[^>]+>/g, "");
}

function genSummary(str) {
    var str = delHtmlTag(str);
    if (str.length > globalSetting.summaryLength)
        return str.substr(0, globalSetting.summaryLength) + " ……";
    else
        return str;

}

function calaPageNavRange(currentPageNum, allPageNum, pageNavSize) {
    var obj = {};
    if (pageNavSize > allPageNum) {
        obj.begin = 1;
        obj.end = allPageNum;
    } else {
        obj.begin = currentPageNum - pageNavSize / 2;
        if (obj.begin < 1) {
            obj.begin = 1;
        }
        obj.end = obj.begin + pageNavSize;
        if (obj.end > allPageNum) {
            obj.end = allPageNum;
            obj.begin = end - pageNavSize;
        }
    }
    return obj;
}


exports.delHtmlTag = delHtmlTag;
exports.genSummary = genSummary;
exports.calaPageNavRange=calaPageNavRange;