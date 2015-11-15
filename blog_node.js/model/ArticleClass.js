/**
 * Created by zl on 2015/8/10.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;


var ArticleClassSchema= new Schema({
    name:{type:String,default:""},
    desc:{type:String,default:""},

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

ArticleClassSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
    }else{
        this.meta.updateAt=Date.now();
    }
    next();
});

ArticleClassSchema.statics={
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
    findByName:function(name,cb){
        return this
            .find({name:name})
            .exec(cb);
    },
    removeAll:function(cb){
        return this
            .remove({})
            .exec(cb);
    }
};

var ArticleClass=mongoose.model('ArticleClass',ArticleClassSchema);

module.exports=ArticleClass;