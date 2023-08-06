const hideCarousel = () => {
    const carousel = document.querySelector('.front-page-carousel');
    if (carousel) {
        carousel.style.display = 'none';
    }
};

hideCarousel();

const observer = new MutationObserver(hideCarousel);
observer.observe(document.body, { childList: true, subtree: true });
