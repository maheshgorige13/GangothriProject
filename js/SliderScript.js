//$(document).ready(function () {
   
//        $('.Slider').bxSlider({
//            auto: true,
//            autoControls: true,
//            stopAutoOnClick: true,
//            pager: true,
//            slideWidth: 600
//        });

//        if ($(window).width() < 767) {
//            $('.Slider').bxSlider({
//                mode: 'horizontal',
//                auto: true,
//                autoHover: true,
//                pause: 7000,
//                slideWidth: 310,
//                minSlides: 1,
//                maxSlides: 1,
//                moveSlides: 1
//            });
//        }
//        else if ($(window).width() < 1023) {
//            $('.Slider').bxSlider({
//                mode: 'horizontal',
//                auto: true,
//                autoHover: true,
//                pause: 7000,
//                slideWidth: 250,
//                minSlides: 3,
//                maxSlides: 3,
//                moveSlides: 1
//            });
//        }
//        else {
//            $('.Slider').bxSlider({
//                mode: 'horizontal',
//                auto: true,
//                autoHover: true,
//                pause: 7000,
//                slideWidth: 245,
//                minSlides: 4,
//                maxSlides: 4,
//                moveSlides: 1
//            });
//        }
//    });

$(document).ready(function () {
    $('.Slider').bxSlider({
        mode: 'horizontal',
        auto: true,
        autoControls: false,
        autoHover: true,
        //stopAutoOnClick: true,
        pager: true,
        pause: 4000,
        slideWidth: 500
    }); 

    $('.TestimonialSlider').bxSlider({
        mode: 'horizontal',
        auto: true,
        autoControls: false,
        controls: false,
        autoHover: true,
        //stopAutoOnClick: true,
        pager: true,
        pause: 4000       
    });
});
            


