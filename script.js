// You can add JavaScript functionality here if needed
// Example: Adding a simple image carousel

const carouselImages = [
  'macbook.jpg',
  'ipad.jpg',
  'iphone.jpg',
  // Add more image URLs as needed
];

let currentImageIndex = 0;

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  updateCarousel();
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
}

function updateCarousel() {
  const carouselImage = document.getElementById('carousel-image');
  carouselImage.src = carouselImages[currentImageIndex];
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize the carousel
  updateCarousel();

  // Add event listeners to the next and previous buttons
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');

  nextButton.addEventListener('click', showNextImage);
  prevButton.addEventListener('click', showPrevImage);
});
