/**
 * Created by zl on 2015/8/9.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;

var CommentSchema= new Schema({
    author:{type:ObjectId,ref:'User'},
    reply:{type:ObjectId,ref:'Comment'},
    article:{type:ObjectId,ref:'Article'},

    title:{type:String,default:""},
    content:{type:String,default:""},

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

CommentSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
    }else{
        this.meta.updateAt=Date.now();
    }
    next();
});

CommentSchema.statics={
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
    findByArticle:function(articleId,cb){
        return this
            .find({article:articleId})
            .sort('meta.createAt')
            .populate('author')
            .exec(cb);
    },
    removeAll:function(cb){
        return this
            .remove({})
            .exec(cb);
    },
    findNewest:function(num,cb){
        if(typeof num !== "number" ){
            cb=num;
            num=10;
        }

        return this
            .find({})
            .sort({'meta.createAt':-1})
            .limit(num)
            .exec(cb);
    }
};

var Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment;