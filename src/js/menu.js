const hamb = document.querySelector('.header__burger')
const hambClose = document.querySelector('.menu__icon-close')
const menu = document.querySelector('.menu')
const menuOther = document.querySelector('.main_blur')


hamb.addEventListener('click', hambHandler)
hambClose.addEventListener('click', hambHandler)

function hambHandler (e) {
   e.preventDefault()
   menu.classList.toggle('menu__open')
   menuOther.classList.toggle('blur')
}
