var main = function() {
    $('.panel').mouseenter(function() {
        $('.menu').animate({
            left: '0px' }, 200);

    });

    $('.panel').mouseleave(function() {
        $('.menu').animate({
            left: '-285px' }, 200);

    });
};

$(document).ready(main);
