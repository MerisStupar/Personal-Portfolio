// Sticky Navigation Menu

const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");
const showMenu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.menu-btn');

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display= "block";
    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display= "none";
    }
}

//Show nav menu and close it on button menu
let navMenu = document.querySelectorAll('.li');
menuBtn.addEventListener('click', () => {
    showMenu.classList.toggle('show_menu');
})
//Close nav menu when clicking on items in menu
for(let menu of navMenu){
    menu.addEventListener('click', () => {
        showMenu.classList.toggle('show_menu');
    }) 
}
