const hamburger = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const portfolio = document.getElementById('portfoliolink');
const about = document.getElementById('aboutlink');
const contact = document.getElementById('contactlink');
const headline = document.querySelector('.headline');
const mobilenavBar = document.querySelector('.nav-bar');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  mobilenavBar.classList.toggle('activecolor');
  hamburger.classList.toggle('cancel');
  headline.classList.toggle('blur');
  navlist.classList.toggle('activelist');
  logo.classList.toggle('inactive');
});

portfolio.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  mobilenavBar.classList.remove('activecolor');
  headline.classList.remove('blur');
  navlist.classList.remove('activelist');
  logo.classList.remove('inactive');
});
contact.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  mobilenavBar.classList.remove('activecolor');
  headline.classList.remove('blur');
  navlist.classList.remove('activelist');
  logo.classList.remove('inactive');
});

about.addEventListener('click', () => {
  navBar.classList.remove('active');
  hamburger.classList.remove('cancel');
  mobilenavBar.classList.remove('activecolor');
  headline.classList.remove('blur');
  navlist.classList.remove('activelist');
  logo.classList.remove('inactive');
});
