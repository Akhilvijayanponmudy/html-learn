gsap.registerPlugin(ScrollTrigger);





// +++++++++++++++++++++++++++++++++++++++++++

let closeSec = document.querySelector('.test-sec-wrap');

gsap.context((self) => {
  let gTrigger = self.selector('.test-sec')
  // gsap.config({ trialWarn: false });

  gsap.to(gTrigger, {
    "--target": "0%",
    ease: "none",

    scrollTrigger: {
      trigger: gTrigger,
      // markers: {
      //   startColor: "yellow",
      //   endColor: "#42a6e0",
      //   fontSize: "14px"
      // },
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1

    }
  });

}, closeSec);




// gsap.config({ trialWarn: false });
// gsap.to(".test-sec", {
//   "--target": "0%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".test-sec",
//     markers: {
//       startColor: "yellow",
//       endColor: "#42a6e0",
//       fontSize: "14px"
//     },
//     start: "top top",
//     end: "+=1000",
//     pin: true,
//     scrub: 1
//   }
// });
// +++++++++++++++++++++++++++++++++++++++++++







let mainDiv = document.querySelector('.gsap-sec')
let ctx = gsap.context((self) => {
  let textElm = self.selector('.gsap-text')
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: textElm,
      start: "top 70%",
      end: "bottom",
      // markers: true,
    }
  })
  let tlSec = gsap.timeline({
    scrollTrigger: {
      trigger: textElm,
      start: "top 40%",
      end: "bottom",
      // markers: true,
    }
  })
  tl.to(textElm, {
    opacity: 1,
    x: 0,
    stagger: 1,

  })
  tlSec.to(mainDiv, {
    backgroundColor: "#fff",
    ease: "power2.out",
    color: "#000",
  })
}, mainDiv);



let revueltoSec = document.querySelector('.revuelto-section');
let ctxRevuel = gsap.context((self) => {
  let secTrigger = self.selector('.revueltotrigger');
  let sl = gsap.timeline({
    scrollTrigger: {
      trigger: secTrigger,
      start: "top 30%",
      end: "bottom ",
      // markers: true,
    }
  })
  sl.to(revueltoSec, {
    opacity: 1,
    ease: "power2.out",

  })

}, revueltoSec)














let textSec = document.querySelector('.text-moving');
let ctxText = gsap.context((self) => {
  let tl2 = gsap.timeline();
  let txL = self.selector('.text-wrap h1')
  tl2.to(txL, {
    x: 1000,
    duration: 50,
    repeat: true,
    ease: 'linear'
  })
  let tl = gsap.timeline();
  tl.to(txL, {
    xPercent: 15,
    scrollTrigger: {
      trigger: txL,
      scrub: 1
    }
  })

}, textSec)



let bannerSelector = document.querySelector('.banner-video');

let bannerCtx = gsap.context((self) => {
  let text = self.selector('.banner-texts .g-anim');
  const tl = gsap.timeline();

  tl.from(text, 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    opacity:0,
    // skewY: 7,
    stagger: {
      amount: .5
    }
  })
  // tl.from(textH6, 1, {
  //   y: 100,
  //   ease: "power4.out",
  //   delay: 1,
  //   opacity:0,
  //   // skewY: 7,
  //   stagger: {
  //     amount: 0.3
  //   }
  // })
},bannerSelector)




var targetDiv = document.querySelector('.swiper-sec-2');
window.addEventListener('scroll', ev => {
  if (targetDiv) {
    var rect = targetDiv.getBoundingClientRect();
    // Log the top position in scrollY on load
    // console.log(rect.top-window.scrollY);
    if (rect.top < 160) {
      document.querySelector('.swiper-sec-2').classList.add('on-position');
    } else {
      document.querySelector('.swiper-sec-2').classList.remove('on-position');
    }
  }
});




var swiper = new Swiper(".lamboSwiperSecond", {
  // slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  // cssMode: true,
  speed: 1500,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});



