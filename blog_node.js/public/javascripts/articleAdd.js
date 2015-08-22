/**
 * Created by zl on 2015/8/21.
 */
$(function(){
    var ue=UE.getEditor('ueditor');
    $('#article-add-submit').click(function(event){
        $('input[name="article[content]"]').val(ue.getContent());
    });
})
