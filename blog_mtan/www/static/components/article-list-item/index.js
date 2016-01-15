/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'
@Component({
    selector: 'article-list-item',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives:[ROUTER_DIRECTIVES]
})
export default class ArticleListItem {
    @Input() set article(val){
        this._article=val;
    };
    get article(){
        return this._article;
    }

    constructor(router:Router, http:Http) {

    }
}