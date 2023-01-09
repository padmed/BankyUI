var swiper = new Swiper(".swiper", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: ".swiper-pagination",
  },
  creativeEffect: {
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
