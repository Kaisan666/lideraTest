import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// const creativitySwiper = document.querySelector(".creativity__swiper")
const creativitySwiper = new Swiper(".why-dlex__swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 24,
    pagination: {
    el: '.why-dlex__swiper-pagination-bullets-wrapper',
    // dynamicBullets: true,
    // dynamicMainBullets: 4,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.why-dlex__swiper-pagination-next-btn',
    prevEl: '.why-dlex__swiper-pagination-prev-btn',
  },
   }) 
console.log(123);
