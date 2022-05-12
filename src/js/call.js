const callButtonMenu = document.querySelector('.menu__icon_call')
const callButton = document.querySelector('.header__call')
const callClose = document.querySelector('.call__close')
const call = document.querySelector('.call')
const menuOther = document.querySelector('.main_blur')
const menu = document.querySelector('.menu')



callButton.addEventListener('click', feedHandler)
callButtonMenu.addEventListener('click', feedHandler)
callClose.addEventListener('click', feedHandler)

function feedHandler (e) {
   e.preventDefault()
   call.classList.toggle('call__open')
   menuOther.classList.toggle('blur')
   menu.classList.toggle('blur')
   callClose.classList.toggle('call__close_other')
}