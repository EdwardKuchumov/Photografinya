
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
// ==================================burger
const burgerButton = document.querySelector('.header__burger-icoblock');
const burgerBlock = document.querySelector('.header__burgerBlock');
const hrefAll = document.querySelectorAll('.header__itemLink')
burgerButton.addEventListener('click', function(){
  burgerBlock.classList.toggle('hidden');
}) 
hrefAll.forEach(function(item){
  item.addEventListener('click', function(){
    burgerBlock.classList.toggle('hidden');
  })
})