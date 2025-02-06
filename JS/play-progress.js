const progressBar = document.getElementById("play-progress");

// Hàm cập nhật màu nền dựa trên giá trị hiện tại
function updateBackground(color) {
  const value = (progressBar.value / progressBar.max) * 100;
  progressBar.style.background = `linear-gradient(to right, ${color} ${value}%, gray ${value}%)`;
}

// Khi hover, đổi nền thành xanh lá
progressBar.addEventListener("mouseenter", function () {
  this.classList.add("hovered");
  updateBackground("lime");
});

// Khi rời chuột, nếu không kéo thì quay lại nền trắng
progressBar.addEventListener("mouseleave", function () {
  this.classList.remove("hovered");
  if (!this.classList.contains("dragging")) {
    updateBackground("white");
  }
});

// Khi bắt đầu kéo, giữ nền xanh lá
progressBar.addEventListener("mousedown", function () {
  this.classList.add("dragging");
  updateBackground("lime");
});

// Khi kéo (di chuyển giá trị), giữ nền xanh lá
progressBar.addEventListener("input", function () {
  updateBackground("lime");
});

// Khi thả chuột, kiểm tra nếu không hover thì quay lại nền trắng
document.addEventListener("mouseup", function () {
  if (progressBar.classList.contains("dragging")) {
    progressBar.classList.remove("dragging");
    if (!progressBar.classList.contains("hovered")) {
      updateBackground("white");
    }
  }
});
