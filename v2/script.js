/* Go back to the top of the page on refresh*/
// window.onscroll = function () { window.scrollTo(0, 0); };

window.onload = function() {
    /* Scroll Down Icon Effect */
    const scroll_icon = document.querySelector('.scroll-icon');

    const header_title_home_page = document.getElementById('header-title-home');
    const mobile_header_title_home_page = document.getElementById('mobile-header-title-home');
    const about_nav_menu = document.getElementById('about-nav-menu');
    const nav_menu_home_page = document.getElementsByClassName('nav-menu-home');
    const icons_home_page = document.getElementsByClassName('icons-home-page');

    const header_title_about_page = document.getElementById('header-title-about');
    const nav_menu_about_page = document.getElementsByClassName('nav-menu-about');
    const icons_about_page = document.getElementsByClassName('icons-about-page');

    window.addEventListener('scroll', scrollEffect);
    function scrollEffect() {
        if(window.scrollY>=1) {
            scroll_icon.style.visibility = 'hidden';
            scroll_icon.style.opacity = '0';
            scroll_icon.style.transition = 'visibility 0s linear 300ms, opacity 300ms';
            // scroll_icon.style.transform = 'translateY(-1vh)';
            // scroll_icon.style.transition = '1s ease-in-out';
        } else if(window.scrollY == 0) {
            scroll_icon.style.visibility = 'visible';
            scroll_icon.style.opacity = '1';
            scroll_icon.style.transition = 'visibility 0s linear 30ms, opacity 300ms';
        }

        var availableScroll = $(document).height() - $(window).height();
        var x = $(window).scrollTop();

        if(header_title_home_page != null) {
            if(x<=availableScroll*0.01) {
                for (let i = 0; i < nav_menu_home_page.length; i++) {
                    nav_menu_home_page[i].style.color = '';
                }
                for (let i = 0; i < icons_home_page.length; i++) {
                    icons_home_page[i].style.color = '';
                }
            } 
            if(x<=availableScroll*0.608 && x>availableScroll*0.01) {
                for (let i = 0; i < nav_menu_home_page.length; i++) {
                    nav_menu_home_page[i].style.color = 'rgb(208, 44, 44)';
                }
                for (let i = 0; i < icons_home_page.length; i++) {
                    icons_home_page[i].style.color = 'rgb(208, 44, 44)';
                }
            } 
            if(x>availableScroll*0.608) {   
                for (let i = 0; i < nav_menu_home_page.length; i++) {
                    nav_menu_home_page[i].style.color = 'rgb(76, 81, 214)';
                }
                for (let i = 0; i < icons_home_page.length; i++) {
                    icons_home_page[i].style.color = 'rgb(76, 81, 214)';
                }
            } 
            if(x<=availableScroll*0.19) {
                header_title_home_page.style.color = '';
                mobile_header_title_home_page.style.color = '';
            } 
            if(x<=availableScroll*0.79 && x>availableScroll*0.19) {
                header_title_home_page.style.color = 'rgb(208, 44, 44)';
                mobile_header_title_home_page.style.color = 'rgb(208, 44, 44)';
            }
            if(x>availableScroll*0.79) {
                header_title_home_page.style.color = 'rgb(76, 81, 214)';
                mobile_header_title_home_page.style.color = 'rgb(76, 81, 214)';
            }
            if(x>availableScroll*0.80) {
                about_nav_menu.style.display = 'block';
            } else {
                about_nav_menu.style.display = 'none';
            }
        } else if (header_title_about_page != null) {
            if(x>availableScroll*0.75) {
                for (let i = 0; i < nav_menu_about_page.length; i++) {
                    nav_menu_about_page[i].style.color = '#6474e5';
                    // scroll_icon.style.transform = 'translateY(-1vh)';
                    // scroll_icon.style.transition = '1s ease-in-out';
                    // about_desc_flag = true;
                }
                for (let i = 0; i < icons_about_page.length; i++) {
                    icons_about_page[i].style.color = '#6474e5';
                    // scroll_icon.style.transform = 'translateY(-1vh)';
                    // scroll_icon.style.transition = '1s ease-in-out';
                    // about_desc_flag = true;
                }
            } else {
                for (let i = 0; i < nav_menu_about_page.length; i++) {
                    nav_menu_about_page[i].style.color = ''; 
                }
                for (let i = 0; i < icons_about_page.length; i++) {
                    icons_about_page[i].style.color = '';
                }
            }
            if(x>availableScroll*0.987) {
                header_title_about_page.style.color = '#6474e5';
            } else {
                header_title_about_page.style.color = '';
            }
        }

        


        // } else if(window.scrollY == 0) {
        //     scroll_icon.style.visibility = 'visible';
        //     scroll_icon.style.opacity = '1';
        //     scroll_icon.style.transition = 'visibility 0s linear 30ms, opacity 300ms';
        // }

    }
    scrollEffect();


    /* Transition Effect */

    // const loaded = document.querySelector('.header-title');
    // if(loaded.classList.contains('loaded')) {
        
    // } else {
    //     loaded.classList.add('loaded');
        
    // }

    // document.getElementById('transition-home').className = 'transition transition-1 is-active';
    //     document.getElementById('transition-about').className = 'transition transition-2 is-active';
        const anchors = document.getElementsByClassName('transition-link');
        const transition_el = document.querySelector('.transition');
        console.log(transition_el);
    
        setTimeout(() => {
        transition_el.classList.remove('is-active');
        }, 500);
    
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
    
            anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
    
            console.log(transition_el);
    
            transition_el.classList.add('is-active');
    
            console.log(transition_el);
    
            setInterval(() => {
            window.location.href = target;
            }, 500);
        })
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "";
}

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('hidden-click-me');
    let pointer = document.getElementById('appear-pointer');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
    //pointer.style.transform = 'rotate('+ 20 + ')deg';
    pointer.style.transform = 'rotate('+(0.2)*left+'deg)'; 
});


let desc = document.getElementById('home-intro');
window.addEventListener('scroll', function() {
    let val = window.scrollY;
    desc.style.marginTop = val * 0.39 + 'px';
    // desc.style.opacity = 1 - 0.0012*val;
})


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
        var name = $('td[name = "name"]').val();
        var email = $('td[name = "email"]').val();
        var message = $('td[name = "message"]').val();
        var status = $('.status');
        status.empty();
        if(email.length > 2 && email.includes('@') && email.includes('.')){
        } else {
            event.preventDefault();
            status.append('<div style="font-size:20px;">Email is invalid</div>')
        }
        if(name.length > 2){ 
        } else {
            event.preventDefault();
            status.append('<div style="font-size:20px;">Name is invalid</div>')
        }
        if(message.length > 2){
        } else {
            event.preventDefault();
            status.append('<div style="font-size:20px;">Message is invalid</div>')
        }
    })
})

TweenMax.from(".wrapper", 1.8, {
    delay: 6.9,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
});

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

