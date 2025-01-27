'use strict';

const MENU_BUTTON = document.querySelector('.header__button_menu');
const MENU = document.querySelector('.nav');
const LOGO = document.querySelector('.header__logo');

MENU_BUTTON.addEventListener('click', () => {
  MENU.classList.toggle('nav_active');
  LOGO.classList.toggle('header__logo_above-nav');
  MENU_BUTTON.classList.toggle('header__button_menu_active');
  document.body.classList.toggle('body_overflow-hidden');
});

const NAV_LINKS = document.querySelectorAll('.nav__link');

NAV_LINKS.forEach((link, id) => {
  link.addEventListener('click', () => {
    if (id === 0 || id === NAV_LINKS.length - 1) {
      return;
    }
    MENU.classList.remove('nav_active');
    LOGO.classList.remove('header__logo_above-nav');
    MENU_BUTTON.classList.remove('header__button_menu_active');
    document.body.classList.remove('body_overflow-hidden');
  });
});
