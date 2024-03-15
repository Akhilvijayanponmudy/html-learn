document.addEventListener('DOMContentLoaded', function () {
    var clickableElement = document.querySelector('.mob-btn');
    clickableElement.addEventListener('click', function () {
        document.body.classList.toggle('show-menu');
    });
});


var gallerySwiper = new Swiper(".swiper-gallery", {
    loop: true,
    navigation: {
        prevEl : ".swiper-button-prev",
        nextEl : ".swiper-button-next",
    },
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    autoplay: {
        delay: 3000, // Set the autoplay delay in milliseconds (e.g., 3000 for 3 seconds)
        disableOnInteraction: false, // Allow manual navigation while autoplay is active
    },
});

var swiper = new Swiper(".price-swiper", {
    loop: true,
    navigation: {
        prevEl : ".price-swiper-button-prev",
        nextEl : ".price-swiper-button-next",
    },
    breakpoints: {
        1920: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });