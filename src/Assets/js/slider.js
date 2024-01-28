(function () {

  'use strict';

  const mySwiper = new Swiper('.swiper-container', {

    loop: true,

    slidesPerView: 'auto',
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev' });





})(); /* IIFE end */
