let currentSlide = 1;
const totalSlides = 4;

setInterval(() => {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }

  document.getElementById(`slide-${currentSlide}-trigger`).checked = true;
}, 2000); 