const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const navbar = document.querySelector('.navbar')

burger.addEventListener('click', function(){
    navbar.classList.toggle('v-class-resp')
    header.classList.toggle('h-class-resp')

})
