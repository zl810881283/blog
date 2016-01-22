/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input,forwardRef} from 'angular2/core'
import {Router} from 'angular2/router'
import {Http} from 'angular2/http'

@Component({
    selector: 'comment-list-item',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives:[forwardRef(()=>CommentListItem)]
})
export default class CommentListItem {
    @Input() set comment(val){
        this._comment=val;
    }
    get comment(){
        return this._comment;
    }
    constructor(router:Router,http:Http) {

    }
}