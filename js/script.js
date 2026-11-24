
let slideIndex = 0;
//  Pjesa e fotove qe ndrrohen
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}
