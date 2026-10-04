const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
let startX = 0;
let isDragging = false;


function updateCarousel() {

    slides.forEach((slide, index) => {

        slide.classList.remove(
            "active",
            "prev",
            "next"
        );

        if (index === currentSlide) {

            slide.classList.add("active");

        } else if (
            index ===
            (currentSlide - 1 + slides.length) % slides.length
        ) {

            slide.classList.add("prev");

        } else if (
            index ===
            (currentSlide + 1) % slides.length
        ) {

            slide.classList.add("next");

        }

    });
}


/* VOLGENDE */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel();
}


/* VORIGE */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateCarousel();
}


/* PIJLEN */

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", previousSlide);


/* SWIPE */

carousel.addEventListener("pointerdown", (event) => {

    startX = event.clientX;

    isDragging = true;

    carousel.setPointerCapture(event.pointerId);

});


carousel.addEventListener("pointerup", (event) => {

    if (!isDragging) return;

    const distance = event.clientX - startX;

    isDragging = false;


    if (distance < -50) {

        nextSlide();

    } else if (distance > 50) {

        previousSlide();

    }

});


/* START */

updateCarousel();