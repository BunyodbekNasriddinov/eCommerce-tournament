let laptopShow = 3;
// if(window.scrollX > 1024) {
//   console.log('dsd');
// }
var x = window.scrollY;
console.log(x);
$(".product__list").slick({
  slidesToShow: laptopShow,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
