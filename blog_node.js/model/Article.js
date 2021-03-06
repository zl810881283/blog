/**
 * Created by zl on 2015/8/9.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;


var ArticleSchema= new Schema({
    author:{type:ObjectId,ref:'User'},
    lastModifyAuthor:{type:ObjectId,ref:'User'},
    title:{type:String,default:""},
    content:{type:String,default:""},
    picturePath:{type:String,default:""},
    clickTimes:{
        type:Number,
        default:0
    },

    clazz:{type:ObjectId,ref:'ArticleClass'},
    keywords:[{type:ObjectId,ref:'ArticleKeyword'}],

    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});

ArticleSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
        this.clickTimes=0;
    }else{
        if(!this.keepUpdateTime)
            this.meta.updateAt=Date.now();
    }
    next();
});

ArticleSchema.statics={
    fetch:function(cb){
        return this
            .find({})
            .sort({'meta.createAt':-1})
            .exec(cb);
    },
    fetchAndPopulate:function(cb){
        return this
            .find({})
            .populate('author')
            .populate('clazz')
            .populate('keywords')
            .sort({'meta.createAt':-1})
            .exec(cb);
    },
    fetchAndPopulateByPage:function(pageNo,pageSize,cb){
        pageSize=parseInt(pageSize)|| 10;
        pageNo=parseInt(pageNo) || 1;

        var beginNo=(pageNo-1)*pageSize;

        return this
            .find({})
            .populate('author')
            .populate('clazz')
            .populate('keywords')
            .sort({'meta.createAt':-1})
            .skip(beginNo)
            .limit(pageSize)
            .exec(cb);
    },
    findById:function(id,cb){
        return this
            .findOne({_id:id})
            .exec(cb);
    },
    findByTitle:function(title,cb){
        return this
            .find({title:title})
            .exec(cb);
    },
    findHotTop:function(num,cb){
        if(typeof num !== "number" ){
            cb=num;
            num=10;
        }

        return this
            .find({})
            .sort({clickTimes:-1})
            .limit(num)
            .exec(cb);
    },
    removeAll:function(cb){
        return this
            .remove({})
            .exec(cb);
    }
};
var Article=mongoose.model('Article',ArticleSchema);
module.exports=Article;