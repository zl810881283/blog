/**
 * Created by zl on 2016/1/10.
 */
import {Component} from 'angular2/core'
import {Router,ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'

@Component({
    selector: 'header',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives:[ROUTER_DIRECTIVES]
})
export default class Header {
    constructor(router:Router,http:Http) {

    }
}