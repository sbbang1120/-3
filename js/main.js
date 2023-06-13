$(function () {


    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }


    })

    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        dots: true,
    })

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });

    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    })
    $('.product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    })


})