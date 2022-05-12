import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const slider1 = document.querySelector('.equipment__slider-container');

let mySwiper1;

function mobileSlider1() {
   if (window.innerWidth < 768 && slider1.dataset.mobile == 'false') {
      mySwiper1 = new Swiper(slider1, {
         slidesPerView: 'auto',
         spaceBetween: 16,
         loop: true,
         slideClass: 'equipment__item',
         pagination: {
            el: '.swiper-pagination-equipment',
         },
      });

      slider1.dataset.mobile = 'true';
   }

   if (window.innerWidth > 768) {
      slider1.dataset.mobile = 'false';
      if (slider1.classList.contains('swiper-container-initialized')) {
         mySwiper1.destroy();
      }
   }
}

mobileSlider1()

window.addEventListener('resize', () => {
   mobileSlider1();
});

const itemsEquipment = document.querySelectorAll('.equipment__item')
const equipmentButton = document.querySelector('.equipment__button-link')
const iconEquipment = document.querySelector('.equipment__button-img')




let clickShowEquipment = function (item, bottom, icon) {
   bottom.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (item.classList.contains('hidden')) {
         item.classList.remove('hidden')
         item.classList.add('visible')
         icon.classList.remove('equipment__button-img_rotate')
         bottom.textContent = 'Скрыть'
      } else if (item.classList.contains('visible')) {
         item.classList.add('hidden')
         item.classList.remove('visible')
         bottom.textContent = 'Показать все'
         icon.classList.add('equipment__button-img_rotate')
      }
   })
}

for (let i = 0; i < itemsEquipment.length; i++) {
   clickShowEquipment(itemsEquipment[i], equipmentButton, iconEquipment)
}








