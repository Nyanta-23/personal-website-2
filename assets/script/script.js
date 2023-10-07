"use strict"

const navbar = document.getElementById('navbar');

const navMob = document.getElementById('mobile');
const buttonMob = document.getElementById('btn-mob');
const lineAnim = buttonMob.getElementsByTagName('span');


// Left Style Responsive Mobile Adjustment
navMob.style.left = `${window.innerWidth}px`;


// Button Mobile Navigation
buttonMob.addEventListener('click', () => {
  navMob.classList.toggle('show-mobile');

  for (let i = 0; i < lineAnim.length; i++) {
    lineAnim[i].classList.toggle('anim-direct')
  }
});


// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    return [
      navbar.classList.add('scrolling-navbar'),
    ]
  }
  return navbar.classList.remove('scrolling-navbar')
});