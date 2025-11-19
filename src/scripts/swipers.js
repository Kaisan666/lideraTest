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
      const swiperElement = instance.el;
      const swiperBullets = swiperElement.querySelector(
        ".swiper-pagination-bullets"
      );
      const bullets = Array.from(
        swiperBullets.querySelectorAll(".swiper-pagination-bullet")
      );
      const activeBullet = swiperBullets.querySelector(
        ".swiper-pagination-bullet-active"
      );
      const activeBulletIndex = bullets.indexOf(activeBullet);

      const swiperLeft = parseFloat(
        getComputedStyle(swiperBullets).getPropertyValue("--left").trim()
      );
      let newLeft = 8;
      if (activeBulletIndex !== 0) {
        newLeft -= 20;
        if (activeBulletIndex <= bullets.length - 5) {

          const qwe = -(12 * (activeBulletIndex - 1));
          newLeft += qwe;
        } else {
          const qwe = -(12 * (bullets.length - 5));
          newLeft += qwe;
        }
      }

      swiperBullets.style.setProperty("--left", newLeft + "px");
    },
    slidePrevTransitionStart: function (instance) {
      const swiperElement = instance.el;
      const swiperBullets = swiperElement.querySelector(
        ".swiper-pagination-bullets"
      );
      const bullets = Array.from(
        swiperBullets.querySelectorAll(".swiper-pagination-bullet")
      );
      const activeBullet = swiperBullets.querySelector(
        ".swiper-pagination-bullet-active"
      );
      const activeBulletIndex = bullets.indexOf(activeBullet);

      const swiperLeft = parseFloat(
        getComputedStyle(swiperBullets).getPropertyValue("--left").trim()
      );
      let newLeft = 8;
      if (activeBulletIndex !== 0) {
        newLeft -= 20;
        if (activeBulletIndex <= bullets.length - 5) {

          const qwe = -(12 * (activeBulletIndex - 1));
          newLeft += qwe;
        } else {
          const qwe = -(12 * (bullets.length - 5));
          newLeft += qwe;
        }
      }

      swiperBullets.style.setProperty("--left", newLeft + "px");
    },
  },
});
