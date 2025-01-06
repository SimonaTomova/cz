document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;


    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out"; 
        slide.style.transform = 'translateX(100%)'; 
    });


    showSlide(slideIndex);

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        }

        slides.forEach((slide, i) => {
            slide.style.opacity = 0;
            slide.style.transform = 'translateX(100%)'; 
            slide.style.display = 'none'; 
        });

        slides[slideIndex].style.display = 'flex'; 
        setTimeout(() => {
            slides[slideIndex].style.opacity = 1; 
            slides[slideIndex].style.transform = 'translateX(0)'; 
        }, 50); 

    }

    // Auto-change slides every 5 seconds
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

});





 