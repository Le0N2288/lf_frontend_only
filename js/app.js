const swiper_movies = new Swiper(".slider_movies", {
    freeMode: true,
    loop: true,
    centeredSlides: true,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2.2,
        },
        320: {
            slidesPerView: 2.5,
        },
        400: {
            slidesPerView: 3,
        },
        450: {
            slidesPerView: 3.5,
        },
        500: {
            slidesPerView: 4,
        },
        550: {
            slidesPerView: 4.5,
        },
        620: {
            slidesPerView: 5,
        },
        680: {
            slidesPerView: 5.5,
        },
        750: {
            slidesPerView: 6,
        },
        875: {
            slidesPerView: 7,
        },
        990: {
            slidesPerView: 8,
        },
        1100: {
            slidesPerView: 9,
        },
        1250: {
            slidesPerView: 10,
        },
        1401: {
            slidesPerView: 12,
        }
    }
});

const swiper_popular = new Swiper(".slider_popular", {
    loop: true,
    autoplay: {
        delay: 11115000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var burger_btn = document.querySelector(".burger_btn");
var side_bar = document.querySelector(".side_bar");
burger_btn.onclick = function(){
    burger_btn.classList.toggle('burger_btn_active')
    side_bar.classList.toggle('side_bar_hide')
}