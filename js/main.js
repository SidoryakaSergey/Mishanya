let pageSlider = new Swiper('.page', {
  wrapperClass: 'page__wrapper',
  slideClass: 'page__screen',

  direction: 'vertical',
  slidesPerView: 'auto',

  parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sesitivity: 1,
  },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
  observeSlideChuldren: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
