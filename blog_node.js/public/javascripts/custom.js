/**
 * Created by zl on 2015/8/21.
 */
$(function(){
    SyntaxHighlighter.highlight();

    $('.panel-zan .panel-remove').click(function(event){
        $(this).parents('.panel').toggle(300);
    });

    var toggleBtn = $('.panel-toggle');
    toggleBtn.data('toggle', true);
    toggleBtn.click(function() {

        var btn = jQuery(this);

        if(btn.data('toggle')) {

            btn.removeClass('icon-chevron-up').addClass('icon-chevron-down');
            btn.parents('div.panel').addClass('toggled');
            btn.data('toggle', false);
        } else {

            btn.removeClass('icon-chevron-down').addClass('icon-chevron-up');
            btn.parents('div.panel').removeClass('toggled');
            btn.data('toggle', true);
        }
    });

})