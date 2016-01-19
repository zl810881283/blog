/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'

let debug = require('debug')('component:article-list-pager');

@Component({
    selector: 'article-list-pager',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [ROUTER_DIRECTIVES]
})
export default class ArticleListPager {
    @Input() set info(val) {
        this._info = val;
        this.pageNavRange = ArticleListPager.calcPageNavRange(val.currentPage, val.totalPages, 5);
    }

    get info() {
        return this._info;
    }

    constructor(router:Router, http:Http) {
        debug('init');
        setTimeout(()=>debug(this.info), 1000);

    }

    static calcPageNavRange(currentPageNum, allPageNum, pageNavSize) {
        let begin, end;
        if (pageNavSize > allPageNum) {
            begin = 1;
            end = allPageNum;
        } else {
            begin = currentPageNum - parseInt(pageNavSize / 2);
            if (begin < 1) {
                begin = 1;
            }
            end = begin + pageNavSize - 1;
            if (end > allPageNum) {
                end = allPageNum;
                begin = end - pageNavSize + 1;
            }
        }

        let result = [];
        for (let i = begin; i <= end; i++) {
            result.push(i);
        }
        return result;
    }
}