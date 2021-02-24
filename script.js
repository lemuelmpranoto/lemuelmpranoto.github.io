/* Go back to the top of the page on refresh*/
// window.onscroll = function () { window.scrollTo(0, 0); };

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

$(document).ready(function (){
    $('.submit').click(function (event){
        
        console.log('button clicked');

        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var status = $('.status');
        status.empty();

        if(email.length > 2 && email.includes('@') && email.includes('.')){
            status.append('<div>Email is valid</div>')
            console.log("email test valid");
        } else {
            event.preventDefault();
            status.append('<div>Email is invalid</div>')
            console.log("email not valid");
        }

        if(name.length > 2){
            status.append('<div>Name is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Name is invalid</div>')
        }

        if(message.length > 2){
            status.append('<div>Message is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Email is invalid</div>')
        }
    })
})

// TweenMax.from(".wrapper", 1.8, {
//     delay: 6.9,
//     opacity: 0,
//     y: -50,
//     ease: Expo.easeInOut
// });

TweenMax.from("loaderafter", 1.6, {
    delay: 7.1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".third-block", 1.6, {
    delay: 6.2,
    opacity: 0,
    // y: 30,
    // ease: Expo.easeInOut
});

TweenMax.from(".border", 3.2, {
    delay: 7.7,
    opacity: 0,
    y: 5,
    ease: Expo.easeInOut
});

// TweenMax.from(".content", 1.6, {
//     delay: 6.5,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

TweenMax.staggerFrom(".media1", 2.3, {
    delay: 7.3,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media2", 2.3, {
    delay: 7.3,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media3", 2.3, {
    delay: 7.3,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".media4", 2.3, {
    delay: 7.3,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
}, 0.2);

document.querySelector(".right ul li").addEventListener("click", function(){
      this.classList.toggle("active");
});

// TweenMax.from(".heading", 1.6, {
//     delay: 6.6,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

// TweenMax.from(".desc", 1.6, {
//     delay: 6.7,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

// TweenMax.from(".aboutme", 1.6, {
//     delay: 6.7,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

// TweenMax.from("button", 1.6, {
//     delay: 6.8,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });

// TweenMax.from(".watch", 1.6, {
//       delay: 6.9,
//       opacity: 0,
//       y: 30,
//       rotation: 90,
//       ease: Expo.easeInOut
// });

// TweenMax.from(".logo", 1.6, {
//     delay: 6.4,
//     opacity: 0,
//     y: 30,
//     ease: Expo.easeInOut
// });