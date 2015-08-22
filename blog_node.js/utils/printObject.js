/**
 * Created by zl on 2015/8/16.
 */
function printObject(obj,level){
    if(!level){
        level=0;
    }
    var str="";
    for(var i=0;i<level;i++)
        str+='\t';

    for(var item in obj){
        if(typeof obj[item] ==="object"||typeof obj[item] ==="array"){
            console.log(str+item+"=>");
            printObject(obj[item],level+1);
        }


        console.log(str+item+"=>"+obj[item]);
    }

}
module.exports=printObject;