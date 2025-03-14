

// document.addEventListener("mousemove", (e) => {
//     const { clientX: x, clientY: y } = e;
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;

//     cubes.forEach((cube) => {
//         const speed = cube.getAttribute("data-speed");

//         const maxShift = 50;

//         let moveX = ((centerX - x) * speed) / 100;
//         let moveY = ((centerY - y) * speed) / 100;

//         moveY = Math.max(-maxShift, Math.min(maxShift, moveY));

//         cube.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     });
// });
// let scrollY = window.scrollY;
// document.addEventListener("mousemove", (e) => {
//     let x = (e.clientX / window.innerWidth - 0.5) * 40;
//     let y = (e.clientY / window.innerHeight - 0.5) * 40;

//     cubes.forEach((cube, index) => {
//         gsap.to(cube, {
//             x: x * (index + 1) * 0.4,
//             y: y * (index + 1) * 0.4,
//             duration: 0.3,
//             ease: "power2.out"
//         });
//     });
// });
let lastScrollY = window.scrollY;
const cubes = document.querySelectorAll('.cube-animation');

window.addEventListener("scroll", () => {
    cubes.forEach((el) => {
        let speed = el.dataset.speed || 0.5; // Har bir elementga individual tezlik berish mumkin
        let yOffset = window.scrollY * speed / 80;
        el.style.transform = `translateY(${yOffset}px)`;
    });
});



function menuShow(e) {
    window.location.href = "#"
    document.querySelector(".header .menu-btn").classList.toggle("active");
    document.querySelector(".header-link__group").classList.toggle("show");
    document.querySelector("html").classList.toggle("overflow-hidden")
}
window.addEventListener('click', function (event) {
    if (!event.target.closest('.menu-btn')) {
        document.querySelector(".header .menu-btn").classList.remove("active");
        document.querySelector(".header-link__group").classList.remove("show");
        document.querySelector("html").classList.remove("overflow-hidden")
    }
});

// swipers
if (document.querySelector(".featuredpressSwiper")) {
    const featuredpressSwiper = new Swiper(".featuredpressSwiper", {
        slidesPerView: 5,
        spaceBetween: 35,
        pagination: {
            el: ".featured-press .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 35,
            }
        }
    });
}
if (document.querySelector(".partnersSwiper")) {
    const partnersSwiper = new Swiper(".partnersSwiper", {
        slidesPerView: 5,
        spaceBetween: 35,
        pagination: {
            el: ".our-partners .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 35,
            }
        }
    });
}