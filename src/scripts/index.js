const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const burgerBtn = document.querySelector('.nav-burger');
const bodyWrap = document.querySelector('body');
const subMenu = document.querySelectorAll('.nav_sub-menu');
const navItems = document.querySelectorAll('.nav_item-sub');

burgerBtn.addEventListener('click', function(){
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav-active');
    bodyWrap.classList.toggle('body-active');
});

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function(){
        navItems[i].classList.toggle('nav_item-decor--active');
        subMenu[i].classList.toggle('nav_sub-menu--active');
    })
}