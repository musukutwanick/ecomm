const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
let slideAnimationDuration = 40000; // Initial duration in milliseconds

// Function to slow down the animation on hover
slideElements.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slides.style.animationDuration = `${slideAnimationDuration * 1}ms`; // Double the duration
    });

    slide.addEventListener('mouseleave', () => {
        slides.style.animationDuration = `${slideAnimationDuration }ms`; // Reset to original duration
    });
});
