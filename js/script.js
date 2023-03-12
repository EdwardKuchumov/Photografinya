// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 30,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     mousewhell: true,
//     keyboard: true,
  
//     // And if we need scrollbar

//   });
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    dalay: 500,
    stoponLastSlide: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    dalay: 1500,
    stoponLastSlide: true,
    disableOnInteraction: false,
  },
});