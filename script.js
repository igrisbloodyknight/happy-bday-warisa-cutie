
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const steps = document.querySelectorAll('.step');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const carouselContainer = document.querySelector('.carousel-container');
  const photoCards = document.querySelectorAll('.photo-card');
  const prevCarouselBtn = document.querySelector('.prev-btn');
  const nextCarouselBtn = document.querySelector('.next-btn');

  // State
  let currentStep = 0;
  let currentPhoto = 0;
  let totalPhotos = photoCards.length;
  
  // Initialize
  showStep(currentStep);
  animateLetters(document.querySelector('.birthday-text'), 100);
  
  // Event Listeners
  nextBtn.addEventListener('click', nextStep);
  prevBtn.addEventListener('click', prevStep);
  prevCarouselBtn.addEventListener('click', prevPhoto);
  nextCarouselBtn.addEventListener('click', nextPhoto);

  // Automatic progression through steps (can be disabled by commenting out)
  const timers = [
    setTimeout(() => autoAdvanceStep(), 3000),  // Move to step 1 after 3s
    setTimeout(() => autoAdvanceStep(), 7000),  // Move to step 2 after 7s
    setTimeout(() => autoAdvanceStep(), 13000), // Move to step 3 after 13s
  ];

  // Functions
  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.remove('active');
      if (index === stepIndex) {
        step.classList.add('active');
      }
    });

    // Show/hide navigation buttons
    prevBtn.style.display = stepIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = stepIndex < steps.length - 1 ? 'block' : 'none';
    
    // Handle special animations for each step
    if (stepIndex === 0) {
      animateLetters(document.querySelector('.birthday-text'), 100);
    } else if (stepIndex === 1) {
      animateLetters(document.querySelector('.personal-message'), 50);
    }
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  function autoAdvanceStep() {
    if (currentStep < steps.length - 1) {
      nextStep();
    }
  }

  function updateCarousel() {
    const offset = -currentPhoto * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextPhoto() {
    currentPhoto = (currentPhoto + 1) % totalPhotos;
    updateCarousel();
  }

  function prevPhoto() {
    currentPhoto = (currentPhoto - 1 + totalPhotos) % totalPhotos;
    updateCarousel();
  }

  function animateLetters(element, delay) {
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * delay}ms`;
      element.appendChild(span);
    });
  }

  // Set up automatic carousel rotation (optional)
  setInterval(nextPhoto, 5000);
});
