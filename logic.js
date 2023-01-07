const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  centeredSlides: true,
  // slidesPerView: 1,
  focusAt: "center",
  spaceBetween: 20,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

console.log(swiper.width);
