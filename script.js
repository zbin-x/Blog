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
// Update JavaScript to add modal functionality

document.addEventListener('DOMContentLoaded', function () {
  // ... (previous JavaScript code)

  // Add event listener for modal button
  const modalButton = document.getElementById('modal-button');
  const modal = document.getElementById('modal');
  const closeButton = document.getElementById('close-button');

  modalButton.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
