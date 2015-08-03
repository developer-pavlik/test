 $(document).ready(function(){
    slider = $('.bxslider').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        autoHover: true
    });

    $('.slider__next-btn').click(function () {
        slider.goToPrevSlide();
    });


    $('.slider__prev-btn').click(function () {
        slider.goToNextSlide();
    });   
});

