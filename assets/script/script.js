"use strict"

const navMob = document.getElementById('mobile');
const buttonMob = document.getElementById('btn-mob');
const lineAnim = buttonMob.getElementsByTagName('span');

// Button Mobile Navigation
buttonMob.addEventListener('click', () => {
  navMob.classList.toggle('display-mobile');

  for (let i = 0; i < lineAnim.length; i++) {
    lineAnim[i].classList.toggle('anim-direct')
  }
});

