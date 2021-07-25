/* Go back to the top of the page on refresh*/
// window.onscroll = function () { window.scrollTo(0, 0); };



const header_title_home_page = document.getElementById('header-title-home');
const header_title_about_page = document.getElementById('header-title-about');

window.onload = function() {
    /* Scroll Down Icon Effect */
    const scroll_icon = document.querySelector('.mouse_scroll');

    const collections_menu_item = document.getElementById('collections-menu-item');
    const projects_menu_item = document.getElementById('projects-menu-item');
    const contact_menu_item = document.getElementById('contact-menu-item');

    const mobile_header_title_home_page = document.getElementById('mobile-header-title-home');
    const socials = document.getElementById('socials-link');
    const nav_menu_home_page = document.getElementsByClassName('nav-menu-home');
    const mobile_nav_menu_home_page = document.getElementsByClassName('mobile-nav-menu-home');
    const icons_home_page = document.getElementsByClassName('icons-home-page');

    const mobile_header_title_about_page = document.getElementById('mobile-header-title-about');
    const socials_about = document.getElementById('socials-link-about');
    const nav_menu_about_page = document.getElementsByClassName('nav-menu-about');
    const mobile_nav_menu_about_page = document.getElementsByClassName('mobile-nav-menu-about');
    const icons_about_page = document.getElementsByClassName('icons-about-page');

    // const about_nav_menu = document.getElementById('about-nav-menu');

    window.addEventListener('scroll', scrollEffect);
    function scrollEffect() {
        if(scroll_icon != null) {
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
        }

        var availableScroll = $(document).height() - $(window).height();
        var x = $(window).scrollTop();
        console.log("x: " + x);
        console.log("availableScroll: " + availableScroll);

        if(header_title_home_page != null) {

            /*--------------------------- For desktop ---------------------------*/
            // if(x<=availableScroll*0.01) {
            //     for (let i = 0; i < nav_menu_home_page.length; i++) {
            //         nav_menu_home_page[i].style.color = '';
            //     }
            //     for (let i = 0; i < icons_home_page.length; i++) {
            //         icons_home_page[i].style.color = '';
            //     }
            // } 
            // if(x<=availableScroll*0.608 && x>availableScroll*0.01) {
            //     for (let i = 0; i < nav_menu_home_page.length; i++) {
            //         nav_menu_home_page[i].style.color = 'rgb(208, 44, 44)';
            //     }
            //     for (let i = 0; i < icons_home_page.length; i++) {
            //         icons_home_page[i].style.color = 'rgb(208, 44, 44)';
            //     }
            // } 
            // if(x>availableScroll*0.608) {   
            //     for (let i = 0; i < nav_menu_home_page.length; i++) {
            //         nav_menu_home_page[i].style.color = 'rgb(76, 81, 214)';
            //     }
            //     for (let i = 0; i < icons_home_page.length; i++) {
            //         icons_home_page[i].style.color = 'rgb(76, 81, 214)';
            //     }
            // }

            if(x>availableScroll*0.81) {
                projects_menu_item.classList.remove('projects-anchor');
                collections_menu_item.classList.add('collections-anchor');
            }
            if(x<=availableScroll*0.81) {
                projects_menu_item.classList.add('projects-anchor');
                collections_menu_item.classList.remove('collections-anchor');
            } 
            if(x<=availableScroll*0.05) {
                projects_menu_item.classList.remove('projects-anchor');
            }

            // if(x>availableScroll*0.80) {
            //     about_nav_menu.style.display = 'block';
            // } else {
            //     about_nav_menu.style.display = 'none';
            // }

            /*--------------------------- For mobile ---------------------------*/
            // if(x<=availableScroll*0.028) {
            //     for (let i = 0; i < mobile_nav_menu_home_page.length; i++) {
            //         mobile_nav_menu_home_page[i].style.color = '';
            //     }
            // } 
            // if(x<=availableScroll*0.53 && x>availableScroll*0.028) {
            //     for (let i = 0; i < nav_menu_home_page.length; i++) {
            //         mobile_nav_menu_home_page[i].style.color = 'rgb(208, 44, 44)';
            //     }
            // }
            // if(x>availableScroll*0.53) {   
            //     for (let i = 0; i < nav_menu_home_page.length; i++) {
            //         mobile_nav_menu_home_page[i].style.color = 'rgb(76, 81, 214)';
            //     }
            // }

            // if(x<=availableScroll*0.48) {
            //     mobile_header_title_home_page.style.color = '';
            //     socials.style.color='';
            // } 
            // if(x<=availableScroll*0.98 && x>availableScroll*0.48) {
            //     mobile_header_title_home_page.style.color = 'rgb(208, 44, 44)';
            //     socials.style.color='rgb(208, 44, 44)';
            // }
            // if(x>availableScroll*0.98) {
            //     mobile_header_title_home_page.style.color = 'rgb(76, 81, 214)';
            //     socials.style.color='rgb(76, 81, 214)';
            // }
            
        } else if (header_title_about_page != null) {

            /*--------------------------- For desktop ---------------------------*/
            // if(x>availableScroll*0.76) {
            //     for (let i = 0; i < nav_menu_about_page.length; i++) {
            //         nav_menu_about_page[i].style.color = '#6474e5';
            //         // scroll_icon.style.transform = 'translateY(-1vh)';
            //         // scroll_icon.style.transition = '1s ease-in-out';
            //         // about_desc_flag = true;
            //     }
            //     for (let i = 0; i < icons_about_page.length; i++) {
            //         icons_about_page[i].style.color = '#6474e5';
            //         // scroll_icon.style.transform = 'translateY(-1vh)';
            //         // scroll_icon.style.transition = '1s ease-in-out';
            //         // about_desc_flag = true;
            //     }
            // } else {
            //     for (let i = 0; i < nav_menu_about_page.length; i++) {
            //         nav_menu_about_page[i].style.color = ''; 
            //     }
            //     for (let i = 0; i < icons_about_page.length; i++) {
            //         icons_about_page[i].style.color = '';
            //     }
            // }

            // if(x>availableScroll*0.987) {
            //     header_title_about_page.style.color = '#6474e5';
            // } else {
            //     header_title_about_page.style.color = '';
            // }
            if(x>availableScroll*0.81) {
                contact_menu_item.classList.add('contact-anchor');
            }
            if(x<=availableScroll*0.81) {
                contact_menu_item.classList.remove('contact-anchor');
            }

            /*--------------------------- For mobile ---------------------------*/
            // if(x>availableScroll*0.53) {
            //     for (let i = 0; i < mobile_nav_menu_about_page.length; i++) {
            //         mobile_nav_menu_about_page[i].style.color = '#6474e5';
            //         // scroll_icon.style.transform = 'translateY(-1vh)';
            //         // scroll_icon.style.transition = '1s ease-in-out';
            //         // about_desc_flag = true;
            //     }
            // } else {
            //     for (let i = 0; i < mobile_nav_menu_about_page.length; i++) {
            //         mobile_nav_menu_about_page[i].style.color = ''; 
            //     }
            // }

            // if(x>availableScroll*0.98) {
            //     mobile_header_title_about_page.style.color = '#6474e5';
            //     socials_about.style.color = '#6474e5';
            // } else {
            //     mobile_header_title_about_page.style.color = '';
            //     socials_about.style.color = '';
            // }
            
        }

        // if(header_title_home_page != null) {
        //     const text1 = document.getElementById('top-text');
        //     const text2 = document.getElementById('bottom-text');
            
        //     if(x > 0.84*availableScroll) {
        //         text1.style.left = '0%';
        //         text2.style.left = '0%';
        //     }
        //     // if(x > 0.89*availableScroll) {
        //     //     text1.style.left = '150%';
        //     //     text2.style.left = '-150%';
        //     // }
        //     if(x <= 0.84*availableScroll) {
        //         text1.style.left = '-150%';
        //         text2.style.left = '150%';
        //     }
        // }
        

        // const projects_gallery = document.getElementById('projects-gallery');
        // if(projects_gallery != null) {
        //     if(x>=0.33*availableScroll) {
        //         projects_gallery.classList.add('fixed');
        //     }
        //     if(x<0.33*availableScroll){
        //         projects_gallery.classList.remove('fixed');
        //     }
        // }
        


        // } else if(window.scrollY == 0) {
        //     scroll_icon.style.visibility = 'visible';
        //     scroll_icon.style.opacity = '1';
        //     scroll_icon.style.transition = 'visibility 0s linear 30ms, opacity 300ms';
        // }

    }
    scrollEffect();


    /* -------------------------------- Transition Effect -------------------------------- */

    // const loaded = document.querySelector('.header-title');
    // if(loaded.classList.contains('loaded')) {
        
    // } else {
    //     loaded.classList.add('loaded');
        
    // }

    // document.getElementById('transition-home').className = 'transition transition-1 is-active';
    //     document.getElementById('transition-about').className = 'transition transition-2 is-active';
    const anchors = document.getElementsByClassName('transition-link');
    const anchors_projects_to_about = document.getElementsByClassName('transition-link-projects-to-about');
    const transition_el = document.querySelector('.transition');
    const transition_projects_to_about = document.getElementsByClassName('transition-projects-to-about');
    // console.log(transition_el);

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
    for (let i = 0; i < anchors_projects_to_about.length; i++) {
        const anchor = anchors_projects_to_about[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
    
            console.log(transition_projects_to_about[0]);
            transition_projects_to_about[0].classList.add('is-active');
            // transition_el.classList.add('is-active');
    
            console.log(transition_projects_to_about[0]);
    
            setInterval(() => {
            window.location.href = target;
            }, 500);
        })
    }
}




function openNav() {
    document.getElementById("overlay-socials").style.width = "100%";
}
function closeNav() {
    document.getElementById("overlay-socials").style.width = "";
}

if(header_title_home_page != null) {
    document.addEventListener('mousemove', function(e) {
        let body = document.querySelector('body');
        let circle = document.getElementById('hidden-click-me');
        let pointer = document.getElementById('appear-pointer');
        let left = e.offsetX;
        let top = e.offsetY;
        circle.style.left = left + 'px';
        circle.style.top = 0.7*top + 'px';
        //pointer.style.transform = 'rotate('+ 20 + ')deg';
        pointer.style.transform = 'rotate('+(0.15)*left+'deg)'; 
    });
}



let home_intro = document.getElementById('home-intro');
window.addEventListener('scroll', function() {
    let val = window.scrollY;
    if(home_intro != null) {
        home_intro.style.marginTop = val * 0.39 + 'px';
    }
    // desc.style.opacity = 1 - 0.0012*val;
})

let about_intro = document.getElementById('about-intro');
window.addEventListener('scroll', function() {
    let val = window.scrollY;
    if(about_intro != null) {
        about_intro.style.marginTop = val * 0.21 + 'px';
    }
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

/* ------------------------ Projects Section Animations ------------------------ */
if(header_title_home_page != null) {

    /******************************* chat'r *******************************/
    const card1 = document.querySelector(".chatr");
    const container1 = document.querySelector(".chatr");
    const image1 = document.querySelector(".img-1 img");
    const description1 = document.querySelector(".project1-title h3");
    const title1 = document.querySelector(".project1-h1");
    const clickable1 = document.querySelector(".click-link.chatr");
    container1.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 4 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.4 - e.pageY) / 15;
        card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container1.addEventListener("mouseenter", (e) => {
        card1.style.transition = "none";
        title1.style.transform = "translateZ(35vh)";
        clickable1.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-15vw)";
        image1.style.transform = "translateZ(35vh) rotateZ(0deg)";
        description1.style.transform = "translateZ(40vh)";
    });
    container1.addEventListener("mouseleave", (e) => {
        card1.style.transition = "all 0.5s ease";
        card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title1.style.transform = "translateZ(0px)";
        clickable1.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-15vw)";
        image1.style.transform = "translateZ(0px) rotateZ(0deg)";
        description1.style.transform = "translateZ(0px)";
    });

    /******************************* event-manager *******************************/
    const card2 = document.querySelector(".event-manager");
    const container2 = document.querySelector(".event-manager");
    const image2 = document.querySelector(".img-2 img");
    const description2 = document.querySelector(".project2-title h3");
    const title2 = document.querySelector(".project2-h1");
    const clickable2 = document.querySelector(".click-link.event-manager");
    container2.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 1.3 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.4 - e.pageY) / 15;
        card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container2.addEventListener("mouseenter", (e) => {
        card2.style.transition = "none";
        title2.style.transform = "translateZ(40vh)";
        clickable2.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-15vw)";
        image2.style.transform = "translateZ(40vh) rotateZ(0deg)";
        description2.style.transform = "translateZ(40vh)";
    });
    container2.addEventListener("mouseleave", (e) => {
        card2.style.transition = "all 0.5s ease";
        card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title2.style.transform = "translateZ(0px)";
        clickable2.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-15vw)";
        image2.style.transform = "translateZ(0px) rotateZ(0deg)";
        description2.style.transform = "translateZ(0px)";
    });

    /******************************* line-following robot *******************************/
    const card3 = document.querySelector(".line-following-robot");
    const container3 = document.querySelector(".line-following-robot");
    const image3 = document.querySelector(".img-3 img");
    const description3 = document.querySelector(".project3-title h3");
    const title3 = document.querySelector(".project3-h1");
    const clickable3 = document.querySelector(".click-link.line-following-robot");
    container3.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 4 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.21 - e.pageY) / 15;
        card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container3.addEventListener("mouseenter", (e) => {
        card3.style.transition = "none";
        title3.style.transform = "translateZ(25vh)";
        clickable3.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-20vw)";
        image3.style.transform = "translateZ(25vh) rotateZ(0deg)";
        description3.style.transform = "translateZ(25vh)";
    });
    container3.addEventListener("mouseleave", (e) => {
        card3.style.transition = "all 0.5s ease";
        card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title3.style.transform = "translateZ(0px)";
        clickable3.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-20vw)";
        image3.style.transform = "translateZ(0px) rotateZ(0deg)";
        description3.style.transform = "translateZ(0px)";
    });


    /******************************* DE-Booth *******************************/
    const card4 = document.querySelector(".DE-Booth");
    const container4 = document.querySelector(".DE-Booth");
    const image4 = document.querySelector(".img-4 img");
    const description4 = document.querySelector(".project4-title h3");
    const title4 = document.querySelector(".project4-h1");
    const clickable4 = document.querySelector(".click-link.DE-booth");
    container4.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 1.3 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.21 - e.pageY) / 15;
        card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container4.addEventListener("mouseenter", (e) => {
        card4.style.transition = "none";
        title4.style.transform = "translateZ(25vh)";
        clickable4.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-20vw)";
        image4.style.transform = "translateZ(25vh) rotateZ(0deg)";
        description4.style.transform = "translateZ(25vh)";
    });
    container4.addEventListener("mouseleave", (e) => {
        card4.style.transition = "all 0.5s ease";
        card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title4.style.transform = "translateZ(0px)";
        clickable4.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-20vw)";
        image4.style.transform = "translateZ(0px) rotateZ(0deg)";
        description4.style.transform = "translateZ(0px)";
    });

    /******************************* home-sec *******************************/
    const card5 = document.querySelector(".home-sec");
    const container5 = document.querySelector(".home-sec");
    const image5 = document.querySelector(".img-5 img");
    const description5 = document.querySelector(".project5-title h3");
    const title5 = document.querySelector(".project5-h1");
    const clickable5 = document.querySelector(".click-link.home-sec");
    container5.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 4 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.14 - e.pageY) / 15;
        card5.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container5.addEventListener("mouseenter", (e) => {
        card5.style.transition = "none";
        title5.style.transform = "translateZ(25vh)";
        clickable5.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-20vw)";
        image5.style.transform = "translateZ(25vh) rotateZ(0deg)";
        description5.style.transform = "translateZ(25vh)";
    });
    container5.addEventListener("mouseleave", (e) => {
        card5.style.transition = "all 0.5s ease";
        card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title5.style.transform = "translateZ(0px)";
        clickable5.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-20vw)";
        image5.style.transform = "translateZ(0px) rotateZ(0deg)";
        description5.style.transform = "translateZ(0px)";
    });


    /******************************* personal website v1 *******************************/
    const card6 = document.querySelector(".personal-website-v1");
    const container6 = document.querySelector(".personal-website-v1");
    const image6 = document.querySelector(".img-6 img");
    const description6 = document.querySelector(".project6-title h3");
    const title6 = document.querySelector(".project6-h1");
    const clickable6 = document.querySelector(".click-link.personal-website-v1");
    container6.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 1.3 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 0.14 - e.pageY) / 15;
        card6.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/2}deg)`;
    });
    container6.addEventListener("mouseenter", (e) => {
        card6.style.transition = "none";
        title6.style.transform = "translateZ(40vh)";
        clickable6.style.transform = "translateZ(40vh) translateX(-17.5vw) translateY(-15vw)";
        image6.style.transform = "translateZ(40vh) rotateZ(0deg)";
        description6.style.transform = "translateZ(40vh)";
    });
    container6.addEventListener("mouseleave", (e) => {
        card6.style.transition = "all 0.5s ease";
        card6.style.transform = `rotateY(0deg) rotateX(0deg)`;
        title6.style.transform = "translateZ(0px)";
        clickable6.style.transform = "translateZ(0px) translateX(-17.5vw) translateY(-15vw)";
        image6.style.transform = "translateZ(0px) rotateZ(0deg)";
        description6.style.transform = "translateZ(0px)";
    });



    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll('.gallery img');
    const original = document.querySelector('.full-img');
    const caption = document.querySelector('.caption');

    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open');
            original.classList.add('open');
            const originalSrc = preview.getAttribute('data-original');
            original.src = originalSrc;
            const altText = preview.alt;
            caption.textContent = altText;
        })
    })

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')) {
            modal.classList.remove('open');
            original.classList.remove('open');
        }
    })
}

if(header_title_home_page == null) {
    const slider = document.querySelector('.scroll-menu');
    let isDown = false;
    let startX;
    let scrollLeft;
    const block = document.getElementById('about-block1');

    slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);




    
    var rect = block.getBoundingClientRect();
    left = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    console.log("Left: " + left + ", Top: " + y + ", Width: " + w + ", Height: " + h);
    });
}
