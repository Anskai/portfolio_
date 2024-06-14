document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    const updateCarousel = () => {
        const carouselWidth = carousel.clientWidth / 3; // Adjust for 3 items per view
        carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < Math.ceil(carousel.children.length / 3) - 1) { // Adjust for 3 items per view
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
});

function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
