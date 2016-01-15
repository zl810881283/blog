/**
 * Created by zl on 2016/1/10.
 */
import {Component} from 'angular2/core'
import {Router,RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'

import ArticleDetailContent from 'components/article-detail-content'
import ArticleHottest from 'components/article-hottest'
import CommentNewest from 'components/comment-newest'
import CommentList from 'components/comment-list'
@Component({
    selector: 'article-detail-page',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [ArticleDetailContent, ArticleHottest, CommentNewest,CommentList]
})
export default class ArticleDetailPage {

    constructor(router:Router, http:Http, routeParams:RouteParams) {

    }
}