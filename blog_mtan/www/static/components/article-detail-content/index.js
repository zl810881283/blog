/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,ROUTER_DIRECTIVES,RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'

@Component({
    selector: 'article-detail-content',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives:[ROUTER_DIRECTIVES]
})
export default class ArticleDetailContent {
    article = {
        "_id": "567e927927ea3580c74ddeab",
        "author": {
            "_id": "55d989d76d6b2b32c53a3577",
            "name": "LadyShelley",
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
        "meta": {"updateAt": "2015-12-26T13:13:29.798Z", "createAt": "2015-12-26T13:13:29.798Z"},
        "keywords": [{
            "_id": "55d98cbd88d25af605317844",
            "name": "纪念",
            "desc": "init",
            "meta": {"updateAt": "2015-08-23T09:05:01.673Z", "createAt": "2015-08-23T09:05:01.673Z"},
            "__v": 0
        }],
        "clickTimes": 6,
        "picturePath": "/picture/748dcc80-abd2-11e5-9a40-5be5a042e73d.png",
        "content": "<p>张小乐剃毛了<br/></p>",
        "title": "剃毛前后一览表",
        "__v": 0
    };

    constructor(router:Router,http:Http,routeParams:RouteParams) {
        let id = routeParams.get('id');
        http.get(`/api/article/${id}`).subscribe((res)=> {
            try {
                let json = res.json();
                if (!+json.errno) {
                    this.article = json.data;
                }
            } catch (err) {

            }
        });
    }
}