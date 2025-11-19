import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/swiper-bundle.css";

// const creativitySwiper = document.querySelector(".creativity__swiper")
const creativitySwiper = new Swiper(".why-dlex__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".why-dlex__swiper-pagination-bullets-wrapper",
    // dynamicBullets: true,
    // dynamicMainBullets: 4,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".why-dlex__swiper-pagination-next-btn",
    prevEl: ".why-dlex__swiper-pagination-prev-btn",
  },
  on: {
    slideNextTransitionEnd: function (instance) {
      console.log(instance);
      const swiperElement = instance.el;
      // const currentSlide = instance.
      const swiperBullets = swiperElement.querySelector(
        ".swiper-pagination-bullets"
      );
      const swiperLeft = parseFloat(
        getComputedStyle(swiperBullets).getPropertyValue("--left").trim()
      );
      console.log(swiperBullets);
      console.log(swiperBullets.style);
      console.log(swiperLeft);
      let newLeft = 8;
      if (instance.activeIndex !== 0) {
        newLeft -= 20;
        if (instance.activeIndex <= instance.slides.length - 4) {
          const qwe = -(12 * (instance.activeIndex - 1));
          newLeft += qwe;
          console.log(newLeft);
        } else {
          const qwe = -(12 * (instance.slides.length - 5));
          newLeft += qwe;
          console.log(newLeft);
        }
      }
      // else{
      //   const qwe = -(12 * (instance.activeIndex - 1))
      //   newLeft += qwe
      // }
      console.log(newLeft);

      swiperBullets.style.setProperty("--left", newLeft + "px");

      console.log(swiperElement);

      console.log("next start");
    },
    slidePrevTransitionEnd: function (instance) {
      console.log(instance);
      const swiperElement = instance.el;
      // const currentSlide = instance.
      const swiperBullets = swiperElement.querySelector(
        ".swiper-pagination-bullets"
      );
      const swiperLeft = parseFloat(
        getComputedStyle(swiperBullets).getPropertyValue("--left").trim()
      );
      console.log(swiperBullets);
      console.log(swiperBullets.style);
      console.log(swiperLeft);
      let newLeft = 8;
      if (instance.activeIndex !== 0) {
        newLeft -= 20;
        if (instance.activeIndex <= instance.slides.length - 4) {
          const qwe = -(12 * (instance.activeIndex - 1));
          newLeft += qwe;
          console.log(newLeft);
        } else {
          const qwe = -(12 * (instance.slides.length - 5));
          newLeft += qwe;
          console.log(newLeft);
        }
      }

      // else{
      //   const qwe = -(12 * (instance.activeIndex - 1))
      //   newLeft += qwe
      // }
      console.log(newLeft);

      swiperBullets.style.setProperty("--left", newLeft + "px");

      console.log(swiperElement);

      console.log("next start");
    },
  },
});
console.log(123);
