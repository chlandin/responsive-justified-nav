jQuery(function($){


    $('#nav-collapse').click(function(e) {
        e.preventDefault();
        $('.main_nav').slideToggle();
    });

    var child_ul = $('.main_nav .parent ul');

    if ( $(window).width() < 768 ) {
        $('.main_nav .parent>a').click(function(e) {
            e.preventDefault();
            if ($(this).next('ul').is(':visible')) {
                $(this).next('ul').slideToggle();
                $(this).find('i').removeClass('icon-minus-sign');
                $(this).find('i').addClass('icon-plus-sign');
            } else {
                $(child_ul).slideUp();
                $(child_ul).parent().find('i').removeClass('icon-minus-sign');
                $(child_ul).parent().find('i').addClass('icon-plus-sign');
                $(this).next('ul').slideToggle();
                $(this).find('i').removeClass('icon-plus-sign');
                $(this).find('i').addClass('icon-minus-sign');
            }
        });
    }

    if ( $(window).width() >= 768 ) {
        $('.main_nav .parent>a').click(function(e) {
            e.preventDefault();
        });
    }
});
