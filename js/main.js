$(function () {
    $('.intro__slider').slick({
        autoplay: true,
        dots: false,
        nextArrow: '<button type="button" class="slick-next"><img class="slick__img" src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img class="slick__img" src="images/back.svg" alt="back"></button>',
    })
    

    
    let mixer = mixitup('.courses');
    mixer.filter('.a');
})