
let hasClassNewClass = true;
let mobMenuOpen = false;

const mobBtn = document.getElementById('mobMenuButton');
const mobWrap = document.getElementById('mobMenuWrap');
const body = document.querySelector('body');

const button = document.getElementById("categoriesButton");
const div = document.getElementById("dropDownWrap");



mobBtn.addEventListener("click", function () {
    if (mobMenuOpen) {
        mobWrap.classList.remove('active');
        mobWrap.classList.add('notActive');
        document.body.classList.remove("menu-open");
        mobMenuOpen = false;
    }
    else {
        mobWrap.classList.remove('notActive');
        mobWrap.classList.add('active');
        document.body.classList.add("menu-open");
        mobMenuOpen = true;
    }
});




button.addEventListener("click", function () {
    if (hasClassNewClass) {
        div.classList.remove("notActive");
        div.classList.add("active");
        hasClassNewClass = false;

    } else {

        div.classList.remove("active");
        div.classList.add("notActive");
        hasClassNewClass = true;
    }
});




const closeBtn = document.querySelector('.mob-close-btn');

closeBtn.addEventListener('click', function () {
    mobWrap.classList.remove('active');
    mobWrap.classList.add('notActive');
    document.body.classList.remove("menu-open");
    mobMenuOpen = false;
})

var swiper = new Swiper(".offerSwiper", {
    effect: "slide",
    speed: 600,
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
