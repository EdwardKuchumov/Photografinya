
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

const galleryPreviews = document.querySelectorAll('.previews__block');
const galleryOne = document.querySelectorAll('.gallery__one')
let numItem = 0;

galleryOne.forEach(function(item, index){
  item.addEventListener('click', function(){
    galleryOne.forEach(function(item){
      item.classList.remove('boxshadow')
    })
    item.classList.add('boxshadow')
    galleryBlock.classList.add('previewBlock')
    // if (galleryBlock.classList.contains('previewBlock')){
    //   document.querySelector('.gallery__block').classList.add('mySwiperGallery')
    // } else{
    //   document.querySelector('.gallery__block').classList.remove('mySwiperGallery')
    // }
    numItem = index;
    previewBlockImg(numItem)
  })
})
let dobyWidth = document.body.offsetWidth;
if (dobyWidth > 922){
  galleryItem.forEach(function(el){
    el.classList.remove('swiper-slide')
  })
  galleryBlock.classList.remove('swiper-wrapper')
  galleryBlock.classList.add('galleryList')
  document.querySelector('.gallery__block').classList.remove('mySwiperGallery')
  document.querySelectorAll('.gallery__arrow').forEach(function(el){
    el.style.display = 'none'
  })
}
console.log(dobyWidth)
function previewBlockImg(index){
  galleryPreviews.forEach(function(item){
    item.classList.add('none')
  })
  galleryPreviews[index].classList.remove('none')
}


let swiperGallery = new Swiper(".mySwiperGallery", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 3,
    }
  }
});