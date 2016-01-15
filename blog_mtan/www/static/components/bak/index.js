/**
 * Created by zl on 2016/1/10.
 */
import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {Http} from 'angular2/http'

@Component({
    selector: 'app',
    template: require('./template.html'),
    styles: [require('./style.less')]
})
export default class App {
    constructor(router:Router,http:Http) {

    }
}