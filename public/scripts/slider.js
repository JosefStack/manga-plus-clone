const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");

let visible = 2;

const getVisibleCount = function() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    visible = isMobile ? 1 : 2;
}

let index = 0;
const moveSlider = function() {
    
    const max = carouselItems.length - visible; 

    let gap = parseFloat(getComputedStyle(carousel).gap);

    let width = carouselItems[0].clientWidth;
    carousel.style.transform = `translateX(-${index * width + index * gap}px)`;
    
    index += visible; 

    if (index === max + visible) {     
        index = 0;
    }

    if (index === max + 1) {             
        index = max;
    }

}

const startSlider = function() {
    moveSlider();
    setInterval(moveSlider, 3000);
}

window.addEventListener("resize", getVisibleCount);

getVisibleCount();
startSlider();
    