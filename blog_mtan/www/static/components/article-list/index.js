/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'

import ArticleListItem from 'components/article-list-item'
import ArticleListPager from 'components/article-list-pager'

let debug=require('debug')('component:article-list');

@Component({
    selector: 'article-list',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [ArticleListItem,ArticleListPager]
})
export default class ArticleList {
    set articlesPaged(val) {
        this.articles = val.data;
        this.pagerInfo = val;
        delete this.pagerInfo.data;
    }

    constructor(router:Router, http:Http,routeParams:RouteParams) {
        debug('init');
        let pageNo = routeParams.get('pageNo') || 1;
        http.get('/api/article', {search: `pageNo=${pageNo}`}).subscribe((res)=> {
            try {
                let json = res.json();
                if (!+json.errno) {
                    this.articlesPaged = json.data;
                }
            } catch (err) {

            }
        });

        this.articlesPaged = {
            "count": 52,
            "totalPages": 6,
            "numsPerPage": 10,
            "currentPage": 6,
            "data": [{
                "_id": "55d98ea788d25af605317859",
                "__v": 0,
                "author": {
                    "_id": "55d989d76d6b2b32c53a3577",
                    "name": "LadyShelley",
                    "password": "20121886",
                    "email": "573328344@qq.com",
                    "nickname": "李小贝",
                    "meta": {"updateAt": "2015-08-23T08:52:39.577Z", "createAt": "2015-08-23T08:52:39.577Z"},
                    "authority": 1,
                    "level": 1,
                    "__v": 0
                },
                "clazz": {
                    "_id": "55d98cbd88d25af60531783c",
                    "name": "恋爱",
                    "desc": "init",
                    "meta": {"updateAt": "2015-08-23T09:05:01.640Z", "createAt": "2015-08-23T09:05:01.640Z"},
                    "__v": 0
                },
                "clickTimes": 33,
                "content": "<p><span style=\"color: rgb(61, 68, 80); font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 17.142858505249px; background-color: rgb(255, 255, 255);\">网站终于上线了！乐男神好棒呀！哇咔咔！张小色，辛苦了，本姐姐要赖你一辈子！！</span><img src=\"http://img.baidu.com/hi/jx2/j_0002.gif\" style=\"box-sizing: border-box; border: 0px; vertical-align: middle; color: rgb(61, 68, 80); font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 17.142858505249px; white-space: normal; background-color: rgb(255, 255, 255);\"/></p>",
                "keywords": [{
                    "_id": "55d98cbd88d25af605317844",
                    "name": "纪念",
                    "desc": "init",
                    "meta": {"updateAt": "2015-08-23T09:05:01.673Z", "createAt": "2015-08-23T09:05:01.673Z"},
                    "__v": 0
                }],
                "meta": {"updateAt": "2015-08-23T09:13:11.682Z", "createAt": "2015-08-23T09:13:11.682Z"},
                "picturePath": "/picture/acc8e760-4a43-11e5-a0a4-dbffc9449e0c.jpeg",
                "title": "二人世界上线了！"
            }, {
                "_id": "55d98d2488d25af605317857",
                "__v": 0,
                "author": {
                    "_id": "55d989d16d6b2b32c53a3576",
                    "name": "zl810881283",
                    "password": "zl7112585",
                    "email": "810881283@qq.com",
                    "nickname": "张小乐",
                    "meta": {"updateAt": "2015-08-23T08:52:33.940Z", "createAt": "2015-08-23T08:52:33.940Z"},
                    "authority": 1,
                    "level": 1,
                    "__v": 0
                },
                "clazz": {
                    "_id": "55d98cbd88d25af605317841",
                    "name": "编程",
                    "desc": "init",
                    "meta": {"updateAt": "2015-08-23T09:05:01.669Z", "createAt": "2015-08-23T09:05:01.669Z"},
                    "__v": 0
                },
                "clickTimes": 22,
                "content": "<p>网站第一次上线，纪念一下<br/></p>",
                "keywords": [{
                    "_id": "55d98cbd88d25af605317844",
                    "name": "纪念",
                    "desc": "init",
                    "meta": {"updateAt": "2015-08-23T09:05:01.673Z", "createAt": "2015-08-23T09:05:01.673Z"},
                    "__v": 0
                }],
                "meta": {"updateAt": "2015-08-23T09:06:44.537Z", "createAt": "2015-08-23T09:06:44.537Z"},
                "picturePath": "/picture/c942ca50-4a43-11e5-a0a4-dbffc9449e0c.jpeg",
                "title": "first article"
            }]
        };
    }
}