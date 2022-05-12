const feedbackButtonMenu = document.querySelector('.menu__icon_chat')
const feedbackButton = document.querySelector('.header__chat')
const feedbackClose = document.querySelector('.feedback__close')
const feedback = document.querySelector('.feedback')
const menuOther = document.querySelector('.main_blur')
const menu = document.querySelector('.menu')



feedbackButton.addEventListener('click', feedHandler)
feedbackButtonMenu.addEventListener('click', feedHandler)
feedbackClose.addEventListener('click', feedHandler)

function feedHandler (e) {
   e.preventDefault()
   feedback.classList.toggle('feedback__open')
   menuOther.classList.toggle('blur')
   menu.classList.toggle('blur')
   feedbackClose.classList.toggle('feedback__close_other')
}