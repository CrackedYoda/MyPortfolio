const hamburger = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const portfolio = document.getElementById('portfoliolink');
const about = document.getElementById('aboutlink');
const contact = document.getElementById('contactlink');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  document.querySelector('.nav-bar').classList.toggle('activecolor');
  hamburger.classList.toggle('cancel');
  document.querySelector('.headline').classList.toggle('blur');
  navlist.classList.toggle('activelist');
  document.querySelector('.logo').classList.toggle('inactive');
});

portfolio.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  document.querySelector('.nav-bar').classList.remove('activecolor');
  document.querySelector('.headline').classList.remove('blur');
  document.querySelector('.work').classList.remove('blur');
  document.querySelector('.about').classList.remove('blur');
  document.querySelector('.form').classList.remove('blur');
  navlist.classList.remove('activelist');
  document.querySelector('.logo').classList.remove('inactive');
});
contact.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  document.querySelector('.nav-bar').classList.remove('activecolor');
  document.querySelector('.headline').classList.remove('blur');
  document.querySelector('.work').classList.remove('blur');
  document.querySelector('.about').classList.remove('blur');
  document.querySelector('.form').classList.remove('blur');
  navlist.classList.remove('activelist');
  document.querySelector('.logo').classList.remove('inactive');
});

about.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  document.querySelector('.nav-bar').classList.remove('activecolor');
  document.querySelector('.headline').classList.remove('blur');
  document.querySelector('.work').classList.remove('blur');
  document.querySelector('.about').classList.remove('blur');
  document.querySelector('.form').classList.remove('blur');
  navlist.classList.remove('activelist');
  document.querySelector('.logo').classList.remove('inactive');
});
