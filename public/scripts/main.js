import { useDeferredValue } from "react";

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");

let visible = 2;

const getVisibleCount = function() {
    const isMobile = window.matchMedia("max-width: 768px").matches;

    visible = isMobile ? 1 : 2;
}

getVisibleCount();
window.addEventListener("resize", getVisibleCount);

let index = 0;
const max = carouselItems.length;

let odd = false;

if (max % 2 != 0) {
    odd = true;
}

const slider = function() {
    let gap = parseFloat(getComputedStyle(carousel).gap);

    let width = carouselItems[0].clientWidth;
    carousel.style.transform = `translateX(-${index * width + index * gap}px)`;
    
    index += visible;
    if (index >= max) {
        index = 0;
    }

    if (odd && (visible === 2)) {
        if (index === max - 1) {
            index--;
        }
    }

}


setInterval(slider, 2000);
