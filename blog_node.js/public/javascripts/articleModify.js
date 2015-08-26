/**
 * Created by zl on 2015/8/25.
 */
$(function(){
    var ue=UE.getEditor('ueditor');
    ue.ready(function(){
      ue.setContent( $('input[name="article[content]"]').val());
    });
    console.log($('input[name="article[content]"]').val());

    $('#article-modify-submit').click(function(event){
        $('input[name="article[content]"]').val(ue.getContent());
    });
})
