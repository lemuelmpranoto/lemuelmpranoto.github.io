/* Go back to the top of the page on refresh*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// TweenMax.from(".logo", 1.6, {
//     delay: 6.4,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

// TweenMax.from(".content", 1.6, {
//     delay: 6.5,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

TweenMax.from(".wrapper", 1.6, {
    delay: 6.5,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".heading", 1.6, {
    delay: 6.6,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".third-block", 1.6, {
    delay: 6.6,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".desc", 1.6, {
    delay: 6.7,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

// TweenMax.from(".aboutme", 1.6, {
//     delay: 6.7,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

TweenMax.from("button", 1.6, {
    delay: 6.8,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from("loaderafter", 1.6, {
    delay: 7.1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

// TweenMax.from(".watch", 1.6, {
//       delay: 6.9,
//       opacity: 0,
//       y: 30,
//       rotation: 90,
//       ease: Expo.easeInOut
// });

TweenMax.staggerFrom(".media1", 2, {
    delay: 7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media2", 2, {
    delay: 7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media3", 2, {
    delay: 7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media4", 2, {
    delay: 7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

document.querySelector(".right ul li").addEventListener("click", function(){
      this.classList.toggle("active");
});

