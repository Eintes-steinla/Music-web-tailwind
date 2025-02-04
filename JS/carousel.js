const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel > div");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const visibleSlides = 3; // Số ảnh hiển thị cùng lúc
const totalSlides = slides.length;

function updateCarousel() {
  const translateX = -index * (100 / visibleSlides);
  carousel.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index > totalSlides - visibleSlides) {
    index = 0; // Quay về đầu khi hết ảnh
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalSlides - visibleSlides; // Quay về cuối khi bấm lùi ở ảnh đầu
  }
  updateCarousel();
});
