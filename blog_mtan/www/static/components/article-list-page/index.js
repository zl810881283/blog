/**
 * Created by zl on 2016/1/10.
 */
import {Component} from 'angular2/core'
import {Router,RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'

import ArticleList from 'components/article-list'
import ArticleHottest from 'components/article-hottest'
import CommentNewest from 'components/comment-newest'

let debug=require('debug')('component:article-list-page');

@Component({
    selector: 'article-list-page',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [ArticleHottest, ArticleList, CommentNewest]
})
export default class ArticleListPage {
     constructor(router:Router, http:Http, routeParams:RouteParams) {
         debug('init');
    }
}