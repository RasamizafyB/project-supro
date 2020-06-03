//Hamburger Menu
const open = document.querySelector('.open-hamburger');
const close = document.querySelector('.close-hamburger')
const menu = document.querySelector('.nav-hamburger');

open.addEventListener("click", function() {
    menu.style.opacity = 0.95;
    menu.style.zIndex = 2;
})

close.addEventListener("click", function() {
    menu.style.opacity = 0;
    menu.style.zIndex = -2;
})
