let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('home-active');
        } else {
            link.classList.remove('home-active');
        }
    });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },

    }
});

const boxes = document.querySelectorAll('.box-img');

boxes.forEach(box => {
    const video = box.querySelector('.video');
    const overlay = box.querySelector('.play-overlay');
    const image = box.querySelector('.image');

    box.addEventListener('mouseenter', () => {
        video.style.display = 'block';
        overlay.style.opacity = '0';
        image.style.opacity = '0';
    });

    box.addEventListener('mouseleave', () => {
        video.style.display = 'none';
        overlay.style.opacity = '1';
        image.style.opacity = '1';
    });
});

