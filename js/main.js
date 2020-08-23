$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slideToScroll:1,
        speed:500,
        easing:"ease",
        infinite:false,
        instalSlide:3,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDots:true,
        draggable:true, //свайпМышкойНон
        swipe:true, //свайпНаМобилкеНон
        touchThreshold:10,
        touchMove:true, //анимашкаСдигаСлайда
        waitForAnimate:false,
        centerMode:true,
        variableWidth:true,
        rows:1,
        slidesPerRow:1,
        vertical:false, //govno
    });
})
