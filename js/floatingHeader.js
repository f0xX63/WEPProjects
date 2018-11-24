$(document).ready(function() {
    $(window).bind('scroll', function() {
        var logoHeight = $('logo').height();
        var headerHeight = $('header').height();
        var navHeight = logoHeight + headerHeight - 47;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});