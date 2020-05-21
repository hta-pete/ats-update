var homeHero      = $("#home-hero");

 
var elem = $('.home-hero_slider');


elem.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  dots: true,
  customPaging : function(slider, i) {
        return '<span></span>';
  },
  nextArrow: $('.slide-next'),
  prevArrow: $('.slide-prev')
});