/**
 * Created by zl on 2015/8/9.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;


var UserSchema= new Schema({
    name:String,
    password:String,
    email:String,
    nickname:String,
    level:{
        type:Number,
        default:1
    },
    authority:{
        type:Number,
        default:1
    },
    no:Number,
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

UserSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
    }else{
        this.meta.updateAt=Date.now();
    }
    next();
});

UserSchema.statics={
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
            .findOne({name:name})
            .exec(cb);
    },
    findByEmail:function(email,cb){
        return this
            .findOne({email:email})
            .exec(cb);
    },
    removeAll:function(cb){
        return this
            .remove({})
            .exec(cb);
    }
};

var User=mongoose.model('User',UserSchema);
module.exports=User;