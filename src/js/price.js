import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const slider2 = document.querySelector('.price__slider-container');

let mySwiper2;

function mobileSlider2() {
   if (window.innerWidth < 768 && slider2.dataset.mobile == 'false') {
      mySwiper2 = new Swiper(slider2, {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: true,
         slideClass: 'price__item',
         pagination: {
            el: '.swiper-pagination-price',
         },
      });

      slider2.dataset.mobile = 'true';
   }

   if (window.innerWidth > 768) {
      slider2.dataset.mobile = 'false';
      if (slider2.classList.contains('swiper-container-initialized')) {
         mySwiper2.destroy();
      }
   }
}

mobileSlider2()

window.addEventListener('resize', () => {
   mobileSlider2();
});