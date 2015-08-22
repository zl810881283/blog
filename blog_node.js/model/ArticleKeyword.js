/**
 * Created by zl on 2015/8/9.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;


var ArticleKeywordSchema= new Schema({
    name:String,
    desc:String,

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

ArticleKeywordSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
        this.clickTimes=0;
    }else{
        this.meta.updateAt=Date.now();
    }
    next();
});

ArticleKeywordSchema.statics={
    fetch:function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
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
    removeAll:function(cb){
        return this
            .remove({})
            .exec(cb);
    }
};

var ArticleKeyword=mongoose.model('ArticleKeyword',ArticleKeywordSchema);

module.exports=ArticleKeyword;