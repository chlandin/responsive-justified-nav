jQuery(function($){

    function toggleNavVisibility(nav) {
        var nd = 'nav-down';

        if ($(nav).hasClass(nd)) {
            $(nav).animate({ height:0 }, 300);
            setTimeout(function() {
                $(nav).removeClass(nd).removeAttr('style');
            }, 320);
        } else {
            var newHeight = $(nav).css('height', 'auto').height();
            $(nav).height(0).animate( { height:newHeight }, 300);
            setTimeout(function() {
                $(nav).addClass(nd).removeAttr('style');
            }, 320);
        }
    }

    $('.nav-expand').click(function() {
        var nav = '.main-nav-list';
        toggleNavVisibility(nav);
    });

    $('.parent a').click(function(e) {
        e.preventDefault();
        if ($(this).find('i').hasClass('fa-chevron-right')) {
            $(this).find('i').removeClass('fa-chevron-right').addClass('fa-chevron-down');
        } else {
            $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-right');
        }
        var nav = $(this).next();
        toggleNavVisibility(nav);
    });

});
