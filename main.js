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

//Scroll reveal
window.sr = ScrollReveal();
ScrollReveal().version;

sr.reveal(".box",{ //Projects
    origin: 'right',
    interval: 106,
    duration: 2000,
    distance: '150%',    
});

sr.reveal(".button",{ //Buttons
    origin: 'top',
    duration: 1500,
    distance: '150%',
    scale: 1.5,  
});

sr.reveal(".title",{ //Titles on pages
    origin: 'top',
    duration: 1500,
    distance: '150%',
   scale: 1.5,  
});

sr.reveal(".form",{
    origin: 'right',
    duration: 1500,
    distance: '150%',
});

sr.reveal(".imageAboutMe",{
    origin: 'left',
    duration: 1500,
    distance: '150%',   
});

sr.reveal(".topic",{
    easing: 'ease-in',
    duration: 1500,
    distance: '150%', 
});

sr.reveal(".paragraph",{
    easing: 'ease-in',
    duration: 1500,
    distance: '150%',   
});

sr.reveal(".topicTwo",{
    easing: 'ease-in',
    duration: 1500,
    distance: '150%',
});


