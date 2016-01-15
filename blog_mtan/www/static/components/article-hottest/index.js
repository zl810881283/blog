/**
 * Created by zl on 2016/1/10.
 */
import {Component,Input} from 'angular2/core'
import {Router,ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'

@Component({
    selector: 'article-hottest',
    template: require('./template.html'),
    styles: [require('./style.less')],
    directives: [ROUTER_DIRECTIVES]
})
export default class ArticelHottest {


    constructor(router:Router, http:Http) {
        http.get('/home/article/hottest').subscribe((res)=> {
            try {
                let json = res.json();
                if (!+json.errno) {
                    this.articles = json.data;
                }
            } catch (err) {

            }
        });
        this.articles = [{
            "_id": "55db1eac286ceb83b6f714de",
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
                "email": "573328344@qq.com",
                "nickname": "李小贝",
                "meta": {"updateAt": "2015-08-23T08:52:39.577Z", "createAt": "2015-08-23T08:52:39.577Z"},
                "authority": 1,
                "level": 1,
                "__v": 0
            },
            "title": "爱我你就抱抱我",
            "content": "<p>昨天晚上闹不开心了，张小乐第一次生气了，我很不开心。张小乐，你不开心我就不开心，特别是你因为我不开心，我就会更不开心。背对着躺在地板上，心碎成渣了。当身后两只胳膊向我伸来，环绕，然后紧抱，你问，冷不冷？我以为自己听错了，我背对着你看不到你的脸，但是我猜你一定帅呆了！然后泪腺完全不受控制哇，情商低，泪决堤，汹涌澎湃~</p><p>不过后来都好了，你说这是你第一次学会低头，我很幸运！但是我们之间没有输和赢。我们是一个整体，相爱，就都赢了，否则，都是输家。我爱你，所以我愿意为你改变我的棱角，期待有一天我们能够像太极八卦图一样，相互包容，站在一起就可以蕴含强大的力量！</p><p>——其实以上都是我昨晚想写的</p><p>今天在一起待了一整天，还细数了你高中开的朵朵桃花，你一定不要被别人追走！你是我的！其他人想要得经过我的审批！张小色，我爱你！就算你看起来很屌丝我也很爱你！</p>",
            "clazz": {
                "_id": "55d98cbd88d25af60531783c",
                "name": "恋爱",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.640Z", "createAt": "2015-08-23T09:05:01.640Z"},
                "__v": 0
            },
            "meta": {"updateAt": "2015-08-24T13:39:56.450Z", "createAt": "2015-08-24T13:39:56.450Z"},
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "clickTimes": 71,
            "picturePath": "/picture/9b6b7010-4a65-11e5-a0a4-dbffc9449e0c.octet-stream",
            "__v": 0
        }, {
            "_id": "55dffa16658df949afaa0414",
            "__v": 0,
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
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
            "clickTimes": 48,
            "content": "<p><span style=\"font-family: 楷体,楷体_GB2312,SimKai; font-size: 20px;\">亲爱的,九月份要到了,我越来越紧张,有时候心理压力突然会非常大,毕竟对我来讲是人生最重要的阶段之一,也是关于我们未来的一个重要转折点,因此会常常很焦虑.有时候会没办法用轻松愉快的心情陪你,对不起!我比较了解我自己的心理和习惯,我非常希望顺利地度过这些天和你在北京开始新的生活!</span></p><p><span style=\"font-family: 楷体,楷体_GB2312,SimKai; font-size: 20px;\">今天晚上不回家了,亲爱的,没有我你晚上也要好好睡觉,你永远是我的小太阳,是我力量的源泉,我爱你!明天见!<br/></span></p>",
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "lastModifyAuthor": "55d989d76d6b2b32c53a3577",
            "meta": {"createAt": "2015-08-28T06:05:10.980Z", "updateAt": "2015-08-28T06:06:06.834Z"},
            "picturePath": "/picture/bc324d40-4d4a-11e5-a63b-4b3a827a190a.jpeg",
            "title": "亲爱的，抱歉没能好好陪你"
        }, {
            "_id": "55dae7da286ceb83b6f714dd",
            "__v": 0,
            "author": {
                "_id": "55d989d16d6b2b32c53a3576",
                "name": "zl810881283",
                "password": "zl7112585",
                "email": "810881283@qq.com",
                "nickname": "张小乐",
                "meta": {"updateAt": "2015-08-23T08:52:33.940Z", "createAt": "2015-08-23T08:52:33.940Z"},
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
            "clickTimes": 34,
            "content": "<p>今天因为某些事有些郁闷，不过后来都看开了，过去的事不再计较，以后的事，我们商量着来，我爱你，李贝贝!<br/></p>",
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "lastModifyAuthor": "55d989d16d6b2b32c53a3576",
            "meta": {"createAt": "2015-08-24T09:46:02.677Z", "updateAt": "2015-08-25T06:31:53.424Z"},
            "picturePath": "/picture/ee8eddc0-4a44-11e5-a0a4-dbffc9449e0c.jpeg",
            "title": "郁闷 释然的一天"
        }, {
            "_id": "55d98ea788d25af605317859",
            "__v": 0,
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
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
            "clickTimes": 33,
            "content": "<p><span style=\"color: rgb(61, 68, 80); font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 17.142858505249px; background-color: rgb(255, 255, 255);\">网站终于上线了！乐男神好棒呀！哇咔咔！张小色，辛苦了，本姐姐要赖你一辈子！！</span><img src=\"http://img.baidu.com/hi/jx2/j_0002.gif\" style=\"box-sizing: border-box; border: 0px; vertical-align: middle; color: rgb(61, 68, 80); font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 17.142858505249px; white-space: normal; background-color: rgb(255, 255, 255);\"/></p>",
            "keywords": [{
                "_id": "55d98cbd88d25af605317844",
                "name": "纪念",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.673Z", "createAt": "2015-08-23T09:05:01.673Z"},
                "__v": 0
            }],
            "meta": {"updateAt": "2015-08-23T09:13:11.682Z", "createAt": "2015-08-23T09:13:11.682Z"},
            "picturePath": "/picture/acc8e760-4a43-11e5-a0a4-dbffc9449e0c.jpeg",
            "title": "二人世界上线了！"
        }, {
            "_id": "55e0778fa31a71214231fe5a",
            "author": {
                "_id": "55d989d16d6b2b32c53a3576",
                "name": "zl810881283",
                "password": "zl7112585",
                "email": "810881283@qq.com",
                "nickname": "张小乐",
                "meta": {"updateAt": "2015-08-23T08:52:33.940Z", "createAt": "2015-08-23T08:52:33.940Z"},
                "authority": 1,
                "level": 1,
                "__v": 0
            },
            "title": "早上分别后，一天都没见到你",
            "content": "<p><span style=\"font-family: 微软雅黑, &#39;Microsoft YaHei&#39;;\">从今天早上（上午）分别后，一天都没见到你，好想你，但是又怕打扰你。亲爱的，保研之前我会尽量给你创造安心复习的空间，尽量压制自己。为了我们长期能在一起而努力，一起加油吧</span></p>",
            "clazz": {
                "_id": "55d98cbd88d25af60531783c",
                "name": "恋爱",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.640Z", "createAt": "2015-08-23T09:05:01.640Z"},
                "__v": 0
            },
            "meta": {"updateAt": "2015-08-28T15:00:31.444Z", "createAt": "2015-08-28T15:00:31.444Z"},
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "clickTimes": 28,
            "picturePath": "/picture/86d3c700-4d95-11e5-be80-7f42cc2a2fad.jpeg",
            "__v": 0
        }, {
            "_id": "55e43014284bf7b4e50ddb77",
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
                "email": "573328344@qq.com",
                "nickname": "李小贝",
                "meta": {"updateAt": "2015-08-23T08:52:39.577Z", "createAt": "2015-08-23T08:52:39.577Z"},
                "authority": 1,
                "level": 1,
                "__v": 0
            },
            "title": "就像我和你",
            "content": "<p>偶然看到一张图片，张小色，像不像我和你啊<img src=\"http://img.baidu.com/hi/jx2/j_0007.gif\"/></p>",
            "clazz": {
                "_id": "55d98cbd88d25af60531783c",
                "name": "恋爱",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.640Z", "createAt": "2015-08-23T09:05:01.640Z"},
                "__v": 0
            },
            "meta": {"updateAt": "2015-08-31T10:44:36.357Z", "createAt": "2015-08-31T10:44:36.357Z"},
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "clickTimes": 28,
            "picturePath": "/picture/45dab800-4fcd-11e5-9e57-b77c5241f941.jpeg",
            "__v": 0
        }, {
            "_id": "55dd2582658df949afaa0410",
            "__v": 0,
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
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
            "clickTimes": 27,
            "content": "<p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">张小乐去了我家，恰逢家里事儿特别多我没顾上他，于是他不开心赌气要走，我特别伤心边道歉边扯着他求他不要，但是他还是跑了出去，我追了好远他头也没回。我表哥急得骂我没出息，还要打张小乐，我担心极了。天黑了，我还在找他，担心他人生地不熟会迷路，后来因为天太黑我自己也迷路了。等回家后，我不停地打电话给他，终于打通了，好话说了一箩筐，张小乐最后终于笑了。所有的伤心与恐惧终于消失了，我呜呜地哭了起来。</span></p><p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">睁开眼看到的是宿舍的屋顶，还好是个梦，心里还有伤心的残余。打开手机看时间3点多一点儿（2点多睡的），我打电话给张小乐，没人接，他应该还在失眠熬夜写代码。</span></p>",
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "lastModifyAuthor": "55d989d76d6b2b32c53a3577",
            "meta": {"createAt": "2015-08-26T02:33:38.659Z", "updateAt": "2015-08-26T02:36:26.896Z"},
            "picturePath": "/picture/db9ec390-4b9a-11e5-a63b-4b3a827a190a.jpeg",
            "title": "一个伤心的梦"
        }, {
            "_id": "55f11449da66e05d59679647",
            "__v": 0,
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
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
            "clickTimes": 27,
            "content": "<p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">&nbsp; &nbsp; 该来的总会来的，在你一个多月前，你胳膊搭在我肩上的那一瞬间我就知道。如今，真的来了，我像是一个作家，看着自己脑海中的情节一点儿点儿随着时间展开，不哭，偶尔会笑。我的淡定时不时会吓到自己。这是我的第一次恋爱。</span></p><p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">&nbsp; &nbsp; &nbsp;有事情没有处理好的时候，我不太想去联系任何人，所以这几天没有给别人打过电话，包括爸爸、妈妈、还有闺蜜，我的世界只剩下你。有你的时候我什么都不怕，你不在的时候我异常孤独。你牵着我，我发自内心的幸福。无论多少人背对着我，我会一往无前地奔向你、拥抱你，一言不发，因为不需要向任何人做任何解释。遇到你之前，我从未真正眸面过爱情，你说爱情源于冲动，我也想且行且珍惜，于是我们牵手和亲吻，于是我对你的热情完全丧失抵抗力，于是我忘了自尊和原则义无反顾地当了小三儿，于是我把自己从未拆封的身体也献给了你，于是我把这些当成一个不能说出的秘密，放在心底，不为人知，无数次小心翼翼。</span></p><p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">&nbsp; &nbsp; &nbsp;当一切被公诸于众，小刘的哭诉与悲惨经历显然获得了更多的同情和鼓励，于是我俩像是两个被扒光衣服的小丑，出现在追光灯下，无论怎样都无法逃离那些尖酸的唾弃。也是现在，我发现自己好陌生，我竟然抵挡得住所有的冷嘲热讽，我竟然放得下顶在头顶的尊严和虚荣，我竟然可以把所有的说辞都消化吞进肚子里，我竟然可以当一个理直气壮的小三儿，多么潇洒的我啊！但是发现我竟然看不得你一脸愁苦的样子，你的难以释怀，常常令我不知所措。<span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">出乎意料，“恋爱中的女人智商为零”对一向理智的我似乎也是有些道理。</span>我比我们想象中更爱你。我也比我想象中更加懂得为爱努力。</span></p><p><span style=\"font-family: 楷体, 楷体_GB2312, SimKai; font-size: 18px;\">&nbsp; &nbsp; &nbsp; 尘埃终会落定，所有的事情总会有个结果。你也向很多人说明了很多，能否理解是别人的事儿我们也管不着，时间会使流言停止，也会说服所有“悲天悯人”的情怀。我从心底觉得我俩对不起小刘，所以无论她怎么闹、怎么骂都应该是我们的亏欠。两个相爱的人，两张机票，和两个行李箱，去一个没有多少人认识的地方重新开始。相信心之所向，身亦能至！</span></p>",
            "keywords": [{
                "_id": "55d98cbd88d25af605317844",
                "name": "纪念",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.673Z", "createAt": "2015-08-23T09:05:01.673Z"},
                "__v": 0
            }],
            "lastModifyAuthor": "55d989d76d6b2b32c53a3577",
            "meta": {"createAt": "2015-09-10T05:25:29.555Z", "updateAt": "2015-09-10T05:42:07.397Z"},
            "picturePath": "",
            "title": "逃离"
        }, {
            "_id": "55df1b9a658df949afaa0413",
            "__v": 3,
            "author": {
                "_id": "55d989d16d6b2b32c53a3576",
                "name": "zl810881283",
                "password": "zl7112585",
                "email": "810881283@qq.com",
                "nickname": "张小乐",
                "meta": {"updateAt": "2015-08-23T08:52:33.940Z", "createAt": "2015-08-23T08:52:33.940Z"},
                "authority": 1,
                "level": 1,
                "__v": 0
            },
            "clazz": {
                "_id": "55d98cbd88d25af60531783d",
                "name": "生活",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.664Z", "createAt": "2015-08-23T09:05:01.664Z"},
                "__v": 0
            },
            "clickTimes": 25,
            "content": "<p>今天事情太多，接二连三的各种项目赶啊。很抱歉没能陪我家亲爱的，亲爱的，让我晚上好好陪陪你吧~<img src=\"http://img.baidu.com/hi/jx2/j_0002.gif\"/><img src=\"http://img.baidu.com/hi/jx2/j_0061.gif\"/></p>",
            "keywords": [],
            "lastModifyAuthor": "55d989d16d6b2b32c53a3576",
            "meta": {"createAt": "2015-08-27T14:15:54.270Z", "updateAt": "2015-08-27T14:17:18.572Z"},
            "picturePath": "",
            "title": "亲爱的，一天都没顾上你"
        }, {
            "_id": "5630e78dbf5bffa475f9d484",
            "author": {
                "_id": "55d989d76d6b2b32c53a3577",
                "name": "LadyShelley",
                "password": "20121886",
                "email": "573328344@qq.com",
                "nickname": "李小贝",
                "meta": {"updateAt": "2015-08-23T08:52:39.577Z", "createAt": "2015-08-23T08:52:39.577Z"},
                "authority": 1,
                "level": 1,
                "__v": 0
            },
            "title": "实验室风波",
            "content": "<p>昨天得知实验室当中全是男生，只有我一个女生的消息。也是那时亲爱的开始郁闷，从下午四点半开始说话酸溜溜，到后来晚上在躺在床上商讨我怎样对待异性的问题，再到后来小乐做了噩梦醒来潸然泪下紧紧抱着我，一整天心底很容易被触碰，眼泪很不经意地落下。</p><p>我们写了约法N章，作为约束我们的约定。而我知道，即便这样，小乐仍然会担心和郁闷。爱情是一种如此不好描述的东西，但我觉得她已然在我的人生扑面而来，留给我无尽的感动，幸福或是伤感和对未来的患得患失、忧心忡忡。</p><p>今天晚上吃饭的时候，小乐说我们要吃健康的食物，不然其中一方如果三四十岁的时候患病离开留给另一方的是无尽的伤痛。其实听到这句话，我很震惊。是什么让正值青春的我们担心自己生命的消逝？因为我们知道有一个人需要自己一生的陪伴，不容缺席。这个角色如此独一无二，父母、子女、朋友都无法与之相较，她只包含一个人、一条生命。</p><p>我跟小乐说我小妹和我很像，长得像，性格像。于是他跟我说如果我不能陪伴他的余生，请我一定把我小妹介绍给他。听起来有些荒诞和滑稽，但是能感受到他的内心。他说他会像杨振宁一样找一个和我一模一样的人弥补我在他心中的空缺。今天吃饭提到北京爱情故事中的老年夫妇，老婆婆得知自己患病将不久人世，因此以老公公表妹的身份去帮他寻找老伴儿，以便有人可以好好照顾他下半辈子，这样她才可以放心的离开。小乐说如果我生病了，他一定会倾尽所有去帮我治病。我没敢用力地去听一字一眼，不敢抬头看他的眼睛，即使这样，眼泪还是喷薄而出。</p><p>不知道是否所有的恋爱都是这样的浓烈，所以总觉得自己非常的幸运，让我遇见小乐，直面爱情。而我也从未像现在一样渴望“执子之手，与子偕老”的一生。</p>",
            "clazz": {
                "_id": "55d98cbd88d25af60531783c",
                "name": "恋爱",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.640Z", "createAt": "2015-08-23T09:05:01.640Z"},
                "__v": 0
            },
            "meta": {"updateAt": "2015-10-28T15:19:41.932Z", "createAt": "2015-10-28T15:19:41.932Z"},
            "keywords": [{
                "_id": "55d98cbd88d25af605317845",
                "name": "小事",
                "desc": "init",
                "meta": {"updateAt": "2015-08-23T09:05:01.674Z", "createAt": "2015-08-23T09:05:01.674Z"},
                "__v": 0
            }],
            "clickTimes": 25,
            "picturePath": "",
            "__v": 0
        }];
    }
}