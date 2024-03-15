document.addEventListener('DOMContentLoaded', function () {
    var mobMenuBtn = document.querySelector('.mob-btn');
    mobMenuBtn.addEventListener('click', function () {
        document.body.classList.toggle('show-menu');
    })
})


var swiper = new Swiper(".testimonialSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    loop: false,

  });