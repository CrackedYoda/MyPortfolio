
const hamburger = document.querySelector('.nav-menu');

hamburger.addEventListener ('click', () => {
    let navBar = document.querySelector('.navbar');
    navBar.classList.toggle('active');
    navBar.style.backgroundColor = '#6070FF';
    document.querySelector('.nav-bar').classList.toggle('activecolor');
    hamburger.classList.toggle('cancel');
    
    let navlist = document.querySelector('.nav-list');
    navlist.classList.toggle('active');
    document.querySelector('.logo').classList.toggle('inactive');
} 
);

