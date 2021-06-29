$('document').ready(function(){

$(function(){

$('.reviews__slider').slick({
 arrows:false,
 slidesToShow: 3,
 slidesToScroll: 3,
 autoplay: true,
 autoplaySpeed: 2000,
 responsive: [
  {
    breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
       },
        {
     breakpoint: 521,
       settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }       
  }]
});

});

});