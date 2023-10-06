$(document).ready(function () {

    $(".header__nav, .footernav").on("click", "a:not(.noscroll)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.menubtn').click(function () {
        $('.header__nav').addClass('show');
        $('body').addClass('openmenu');
    });
    $('.closemenu, .menubg').click(function () {
        $('.header__nav').removeClass('show');
        $('body').removeClass('openmenu');
    });

    if ($(window).width() < 992) {
        $('.header__nav ul li a').click(function () {
            $('.header__nav').removeClass('show');
            $('body').removeClass('openmenu');
        })
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    if ($(this).scrollTop() > 10) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }

});