const carousel = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;
const interval = 2000; // Change image every 2 seconds

function slideCarousel() {
  currentIndex = (currentIndex + 1) % images.length;
  const translateValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateValue}%)`;
}

setInterval(slideCarousel, interval);
