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
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  autoplay: {
    dalay: 1000,
    stoponLastSlide: true,
    disableOnInteraction: false,
  },
});
