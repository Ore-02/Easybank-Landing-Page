const header = document.getElementById('header')
const hamburger = document.getElementById('hamburger')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const menu = document.querySelector('.menu')





const noScroll = () => {
    body.classList.toggle('scroll')
}

const toogleHamburger = () => {
    header.classList.toggle('open')
    noScroll()
    toggleMenu()

}

const toggleMenu = () => {
    if(header.classList.contains('open')) {
        menu.style.display='block'
    } else {
        menu.style.display='none'
    }
}

hamburger.addEventListener('click', toogleHamburger)
overlay.addEventListener('click', toogleHamburger)
