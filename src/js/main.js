import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import '../js/equipment'
import '../js/price'
import '../js/menu'
import '../js/feedback'
import '../js/call'

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let bottom = document.querySelector('.brands__button-link')
let items = document.querySelectorAll('.item_hidden')
let icon = document.querySelector('.brands__button-img')



let clickShow = function (item, bottom, icon) {
   bottom.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (item.classList.contains('item_hidden')) {
         item.classList.remove('item_hidden')
         item.classList.add('item_visible')
         icon.classList.remove('brands__button-img_rotate')
         bottom.textContent = 'Скрыть'
      } else if (item.classList.contains('item_visible')) {
         item.classList.add('item_hidden')
         item.classList.remove('item_visible')
         bottom.textContent = 'Показать все'
         icon.classList.add('brands__button-img_rotate')
      }
   })
}

for (let i = 0; i < items.length; i++) {
   clickShow(items[i], bottom, icon)
}

let itemsHiddenMobile = document.querySelectorAll('.item_hidden-mobile')

let clickShowMobile = function (item, bottom, icon) {
   bottom.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (item.classList.contains('item_hidden-mobile')) {
         item.classList.remove('item_hidden-mobile')
         item.classList.add('item_visible-mobile')
         icon.classList.remove('button-img_rotate')
         bottom.textContent = 'Скрыть'
      } else if (item.classList.contains('item_visible-mobile')) {
         item.classList.add('item_hidden-mobile')
         item.classList.remove('item_visible-mobile')
         bottom.textContent = 'Показать все'
         icon.classList.add('button-img_rotate')
      }
   })
}


for (let i = 0; i < itemsHiddenMobile.length; i++) {
   clickShowMobile(itemsHiddenMobile[i], bottom, icon)
}

const slider = document.querySelector('.slider-container');

let mySwiper;

function mobileSlider() {
   if (window.innerWidth < 600 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: true,
         slideClass: 'link-row__item',
         pagination: {
            el: '.swiper-pagination',
         },
      });

      slider.dataset.mobile = 'true';
   }

   if (window.innerWidth > 600) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
         mySwiper.destroy();
      }
   }
}

mobileSlider()

window.addEventListener('resize', () => {
   mobileSlider();
});



