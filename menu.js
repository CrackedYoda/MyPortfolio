const hamburger = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const portfolio = document.getElementById('portfoliolink');
const about = document.getElementById('aboutlink');
const contact = document.getElementById('contactlink');
const seeproject = document.getElementsByClassName('.seeproject');

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


// pop up section
 
// pop up text
const projects = [
    {
      name: 'tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'images/tonic.png',
      technologies: ['HTML', 'CSS', 'javascript'],
      liveLink: 'https://www.google.com',
      sourceLink: 'https://www.github.com/Akorede3133/portfolio',
      id: 'tonic',
    },
    {
      name: 'multi-Post stories',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      image: 'images/multi-stories.png',
      technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
      liveLink: 'https://www.google.com',
      sourceLink: 'https://www.github.com/Akorede3133/portfolio',
      id: 'stories',
    },
    {
      name: 'facebook 360',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'images/facebook360.png',
      technologies: ['HTML', 'CSS', 'javascript'],
      liveLink: 'https://www.google.com',
      sourceLink: 'https://www.github.com/Akorede3133/portfolio',
      id: 'facebook',
    },
    {
      name: 'uber navigation',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      image: 'images/uber.png',
      technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
      liveLink: 'https://www.google.com',
      sourceLink: 'https://www.github.com/Akorede3133/portfolio',
      id: 'uber',
    },
  ];

