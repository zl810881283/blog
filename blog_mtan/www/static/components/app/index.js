/**
 * Created by zl on 2016/1/10.
 */
import {Component} from 'angular2/core'
import {Router,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'
import Footer from 'components/footer'
import Header from 'components/header'
import ArticleListPage from 'components/article-list-page'
import ArticleDetailPage from 'components/article-detail-page'

let debug=require('debug')('component:app');
@Component({
    selector: 'app',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [Footer, Header, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/", as: "Home", useAsDefault: true, redirectTo: ['ArticleList', {pageNo: 1}]},
    {
        path: "/article/list",
        as: "ArticleListMain",
        redirectTo: ['ArticleList', {pageNo: 1}]
    },
    {path: "/article/list/:pageNo", component: ArticleListPage, as: "ArticleList"},
    {path: "/article/:id", component: ArticleDetailPage, as: "Article"}
])
export default class App {
    constructor(router:Router, http:Http) {
        debug('init');
    }
}