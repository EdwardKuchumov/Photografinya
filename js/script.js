
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
const hrefAll = document.querySelectorAll('.header__itemLink');
burgerButton.addEventListener('click', function(){
  burgerBlock.classList.toggle('hidden');
}) 
hrefAll.forEach(function(item){
  item.addEventListener('click', function(){
    burgerBlock.classList.add('hidden');
  })
})

// ====================================prise hover
// const galleryItem = document.querySelector('.gallery__one');
// const buttonGallery = document.querySelector('.gallery__item-more')
// galleryItem.addEventListener("mouseenter", function(event){

//   buttonGallery.classList.remove('bottom-hide')
  
// })
// galleryItem.addEventListener("mouseout", function(event){
//   buttonGallery.classList.add('bottom-hide')
//   console.log('no')
// })
// ==================================gallery previews
const galleryBlock = document.querySelector('.gallery__list');
const galleryItem = document.querySelectorAll('.gallery__item');

const galleryPreviews = document.querySelector('.previews__block');

galleryItem.forEach(function(item){
  item.addEventListener('click', function(){
    galleryBlock.classList.toggle('previewBlock')
    galleryPreviews.classList.toggle('none')
  })
})