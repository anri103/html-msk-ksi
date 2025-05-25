// swiper
const swiperProjects = new Swiper('.swiperProjects', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});

// Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

