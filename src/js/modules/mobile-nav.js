const openMenu = document.querySelector('.js-open')
const closeMenu = document.querySelector('.js-close')
const menuItem = document.querySelector('.mobile-nav')
const body = document.body


openMenu.addEventListener('click', function () {
	menuItem.classList.add('active')
	body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', function () {
	menuItem.classList.remove('active')
	body.style.overflow = 'auto'
})

