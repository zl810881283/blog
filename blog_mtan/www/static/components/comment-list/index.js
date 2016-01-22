/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'

import CommentListItem from 'components/comment-list-item'

let debug = require('debug')('component:comment-list');
@Component({
    selector: 'comment-list',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives:[CommentListItem]
})
export default class CommentList {
    set commentsPaged(val) {
        this.comments = val.data;
        this.pagedInfo = val;
        delete this.pagedInfo.data;
    }


    constructor(router:Router, http:Http, routeParams:RouteParams) {
        debug('init');
        setTimeout(()=> {
            debug(this.pagedInfo, this.pagedInfo)
        }, 1500);

        let id = this.articleID = routeParams.get('id');
        let pageNo = routeParams.get('pageNo') || 1;
        http.get('/home/comment/article', {search: `id=${id}&pageNo=${pageNo}`}).subscribe((res)=> {
            try {
                let json = res.json();
                if (!+json.errno) {
                    this.commentsPaged = json.data;
                }
            } catch (err) {

            }
        });
        this.commentsPaged = {
            "count": 3,
            "totalPages": 1,
            "numsPerPage": 10,
            "currentPage": 1,
            "data": [{
                "_id": "5648d4b56ba60a496f7af42b",
                "article": "5648d3456ba60a496f7af42a",
                "author": "55d989d76d6b2b32c53a3577",
                "meta": {"updateAt": "2015-11-15T18:53:41.763Z", "createAt": "2015-11-15T18:53:41.763Z"},
                "content": "小乐同学触犯不及时回复QQ消息一条，0.5倍处罚。\r\n小贝同学触犯手机关机，说分手，0.5+1——共计1.5倍处罚。",
                "title": "",
                "__v": 0,
                "subcomments": []
            }, {
                "_id": "56499da46ba60a496f7af430",
                "article": "5648d3456ba60a496f7af42a",
                "author": "55d989d16d6b2b32c53a3576",
                "meta": {"updateAt": "2015-11-16T09:11:00.980Z", "createAt": "2015-11-16T09:11:00.980Z"},
                "content": "看这篇，很感动。我们这个剧情也确实太丰富了，估计我们的恋爱史都可以拍几部电影了。\r\n亲爱的，事情过了，我想分析下这件事\r\n感性角度\r\n  经历这些事，某种意义上也算是对我们感情的考验。至少到现在为止的考验我们都是通过的。\r\n  我母亲曾经跟我说，两个人在一起是十分不容易的。当时我不以为然，现在自己经历了才知道。\r\n  希望我们都能好好珍惜这份来之不易的感情\r\n理性角度\r\n  想起了一首歌唱的“相爱没有那么容易,每个人都有他的脾气”，\r\n  其实我们俩的脾气太像了，可能我还更倔，更不愿意低头。\r\n  希望我们共勉：恋爱婚姻中的低头并不丢脸，反而先低头那方更伟大\r\n  ",
                "title": "",
                "__v": 0,
                "subcomments": [{
                    "_id": "5649f8f46ba60a496f7af432",
                    "reply": "56499da46ba60a496f7af430",
                    "article": "5648d3456ba60a496f7af42a",
                    "author": "55d989d76d6b2b32c53a3577",
                    "meta": {"updateAt": "2015-11-16T15:40:36.860Z", "createAt": "2015-11-16T15:40:36.860Z"},
                    "content": "回复 张小乐 :\r\n我也觉得，我们俩在一起之后估计还会有很多次像这样的拌嘴和磨合，不过每次我都会认真的反思，不断改进自己，做一个理想的女朋友。吵归吵，过完嘴皮子瘾我们还是恩爱的小两口儿，爱你。",
                    "title": "",
                    "__v": 0,
                    "subcomments": []
                }, {
                    "_id": "5649fc896ba60a496f7af434",
                    "reply": "56499da46ba60a496f7af430",
                    "article": "5648d3456ba60a496f7af42a",
                    "author": "55d989d76d6b2b32c53a3577",
                    "meta": {"updateAt": "2015-11-16T15:55:53.970Z", "createAt": "2015-11-16T15:55:53.970Z"},
                    "content": "回复 张小乐 :\r\n亲爱的，其实我内心一直非常感动，工作上你一直都是那么强势，但是感情中你却不断地包容我。其实我知道脾气坏的时候会特别糟，但我一直以为只是小时候。后来想想，我这臭脾气却常常发给自己最爱的人——我的爸爸妈妈弟弟妹妹，同学朋友几乎没有过。长大之后不经常回家，所以每次都提醒自己尽量要温和一点儿。现在遇到了你，慢慢地就又像回到了小时候，在至亲面前变得总是很随意，可以亲的如胶似漆，也可以吵的不可开交，其实我还是挺担心我的臭脾气、大嗓门会把你吓跑，我会慢慢改进自己，把这些不好的慢慢都改掉。",
                    "title": "",
                    "__v": 0,
                    "subcomments": []
                }]
            }, {
                "_id": "56499b2b6ba60a496f7af42f",
                "__v": 0,
                "article": "5648d3456ba60a496f7af42a",
                "author": "55d989d16d6b2b32c53a3576",
                "content": "说点题外话，看到你把这么多的聊天记录都截图并排列好，吓了我一跳，这要花不少精力吧？还有这个网站图片没有压缩，这张图片放在首页，你手机刷新下光一张图片几兆流量就没了。。。。",
                "meta": {"updateAt": "2015-11-16T09:27:27.936Z", "createAt": "2015-11-16T09:27:27.936Z"},
                "title": "",
                "subcomments": [{
                    "_id": "5649f7c06ba60a496f7af431",
                    "reply": "56499b2b6ba60a496f7af42f",
                    "article": "5648d3456ba60a496f7af42a",
                    "author": "55d989d76d6b2b32c53a3577",
                    "meta": {"updateAt": "2015-11-16T15:35:28.497Z", "createAt": "2015-11-16T15:35:28.497Z"},
                    "content": "回复 张小乐 :\r\n所以我就不用手机刷本网站了~~",
                    "title": "",
                    "__v": 0,
                    "subcomments": []
                }, {
                    "_id": "5649fa946ba60a496f7af433",
                    "reply": "56499b2b6ba60a496f7af42f",
                    "article": "5648d3456ba60a496f7af42a",
                    "author": "55d989d16d6b2b32c53a3576",
                    "meta": {"updateAt": "2015-11-16T15:47:32.795Z", "createAt": "2015-11-16T15:47:32.795Z"},
                    "content": "回复 李小贝 :\r\n你可以等到这篇文章到了第二页就好了",
                    "title": "",
                    "__v": 0,
                    "subcomments": []
                }]
            }]
        }

    }
}