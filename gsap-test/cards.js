const Width = window.innerWidth;

let serv_accnt_sec=document.querySelector('.card-section');
        let ser_card_ctx = gsap.context((self) => {

          // gsap.set(serv_accnt_sec, { height: '100vh' });
          const cards = self.selector(".card");

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: serv_accnt_sec,
              pin: true,
              start: "top +=88px",
              end: "2000px",
              scrub: 0,
              markers: { startColor: "red", endColor: "blue" },
              invalidateOnRefresh: true,
            },
          })

          function setCard() {
            cards.forEach((card, index) => {
              if (index > 0) {
                gsap.set(card, {
                  opacity: .7,
                  // scale: () => 1 - index * 0.025,
                  y: index * 900,
                  willChange: 'transform, opacity',
                })
              }
            })
          }

          setCard()

          cards.forEach((card, index) => {
            if (index > 0) {

              tl.to(card, {
                opacity: 1,
                force3D: true,
                // stagger: 1,
                // x: index * 10,
                y: Width >= 2000 ? index * 160 : Width >= 1600 ? index * 100 : index * 70,
              })
            }
          })
        }, serv_accnt_sec)
      

// scrollTrigger: {
//     trigger: gTrigger,
//     // markers: {
//     //   startColor: "yellow",
//     //   endColor: "#42a6e0",
//     //   fontSize: "14px"
//     // },
//     start: "top top",
//     end: "+=1000",
//     pin: true,
//     scrub: 1

//   }


// gsap.registerPlugin(ScrollTrigger);
// let wrap = document.querySelector('.card-section');

// let ctx = gsap.context((self) => {
//     let triggerElm = self.selector('.card-wrap');
//     let textElm = self.selector('.card');
//     let textElm_2 = self.selector('.card_3');

//     gsap.set(textElm,{y : 1000})
//     gsap.set(textElm_2,{y : 2000})

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: triggerElm,
//             start: "top",
//             end: "+=1000",
//             markers: true,
//             pin : true,
//             scrub : true,
//         }
//     })
//     let tl_2 = gsap.timeline({
//         scrollTrigger: {
//             trigger: triggerElm,
//             start: "top",
//             end: "+=2000",
//             markers: true,


//         }
//     })

//     tl.to(textElm, {
//         y: 20,
//     })
//     tl_2.to(textElm_2, {
//         y: 20,
//         pin : true,
//         scrub : true,

//     })



// tl.to(textElm, {
//     // opacity: 1,
//     y: 0,
//     // stagger: 1,
//     pin: true
// })



// }, wrap)




// const cards = gsap.utils.toArray(".card");

// cards.forEach((card, index) => {
//   const tween = gsap.to(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: () => `top bottom-=100`,
//       end: () => `top top+=40`,
//       scrub: true,
//       markers: true,
//       invalidateOnRefresh: true
//     },
//     ease: "none",
//     scale: () => 1 - (cards.length - index) * 0.025
//   });

//   ScrollTrigger.create({
//     trigger: card,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
//     markers: true,
//     id: 'pin',
//     end: 'max',
//     invalidateOnRefresh: true,
//   });
// });








// gsap.registerPlugin(ScrollTrigger);

// const cards = document.querySelectorAll('.card');
// const header = document.querySelector('.spacer_top');
// const animation = gsap.timeline()





// cards.forEach((card, index) => {
//     if (index > 0) {
//         //increment y value of each card by 200px
//         gsap.set(card, { y: index * 200 })
//         //animate each card back to 0 (for stacking)

//         animation.to(card, { y: 100, duration: index * 0.5, ease: "none" }, 0)

//     }
// })






// ScrollTrigger.create({
//     trigger: ".card-wrap",
//     start: "top top",
//     pin: true,
//     // end: `+=${(cards.length * 200) + header.offsetHeight}`,
//     end:`+=${(cards.length * 1000)}`,
//     scrub: true,
//     animation: animation,
//     markers: true

// })






