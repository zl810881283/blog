/**
 * Created by zl on 2015/8/16.
 */


var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;


var SiteSettingSchema= new Schema({
    siteName:String,
    domain:String,
    contactEmail:String,
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

SiteSettingSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
    }else{
        this.meta.updateAt=Date.now();
    }
    next();
});

SiteSettingSchema.statics={
    findInstance:function(cb){
        return this
            .findOne({})
            .exec(cb);
    },
    fetch:function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    }
};

var SiteSetting=mongoose.model('SiteSetting',SiteSettingSchema);

module.exports=SiteSetting;