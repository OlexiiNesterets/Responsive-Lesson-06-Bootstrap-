'use strict';

(function ($) {

    // $('.pagintaion-item').click(function (event) {
    //     var $target = event.target;
    //     $('.slider__pagination').find('.on').removeClass('on');
    //     $(this).addClass('on');
    //     var $index = $(this).index();
    //     $('.slider').find('.active').removeClass('active');
    //     $('.slider__item').eq($index).addClass('active');
    // });

    $('.slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2600,
        appendDots: $('.slider__dots'),
        dotsClass: 'slider__pagination',
        dots: true,
    });

    /* ------------------------------------------ */

    $('.menu-img').click(function () {
        $('.mobile__nav').toggleClass('active');
    });

    $(window).resize(function () {
        if ($(this).width() > 991) {
            $('.mobile__nav').removeClass('active');
        }
    });

})(jQuery);