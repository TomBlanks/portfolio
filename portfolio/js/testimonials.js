// Testimonials Carousel Functionality

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const leftArrow = document.querySelector('.carousel-arrow-left');
  const rightArrow = document.querySelector('.carousel-arrow-right');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;
  const totalCards = cards.length;

  // Update carousel position
  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update arrow states
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === totalCards - 1;
  }

  // Navigate to specific index
  function goToSlide(index) {
    if (index >= 0 && index < totalCards) {
      currentIndex = index;
      updateCarousel();
    }
  }

  // Previous slide
  function previousSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Next slide
  function nextSlide() {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  // Event listeners
  leftArrow.addEventListener('click', previousSlide);
  rightArrow.addEventListener('click', nextSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      goToSlide(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      previousSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        previousSlide();
      }
    }
  }

  // Initialize carousel
  updateCarousel();
});
