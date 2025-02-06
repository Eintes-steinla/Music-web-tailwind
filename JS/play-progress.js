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

// ! ------------
const audio = document.getElementById("audio-song");
// const progressBar = document.getElementById("play-progress");
const playTime = document.getElementById("play-time");
const playButtons = document.querySelectorAll(".play-button-bg-song");

let isPlaying = false;
let isDragging = false;

// Chuyển giây thành định dạng mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Khi bấm bất kỳ nút play nào
playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      updateAllButtons("Play");
    } else {
      audio.play();
      updateAllButtons("Pause");
    }
    isPlaying = !isPlaying;
  });
});

// // Cập nhật trạng thái của tất cả các nút
// function updateAllButtons(text) {
//   playButtons.forEach((button) => {
//     button.textContent = text;
//   });
// }

// Cập nhật thanh trượt và thời gian khi nhạc chạy
audio.addEventListener("timeupdate", () => {
  if (!isDragging) {
    progressBar.value = Math.floor(audio.currentTime);
    playTime.textContent = formatTime(audio.currentTime);
    updateProgressBar();
  }
});

// Khi nhạc kết thúc
audio.addEventListener("ended", () => {
  isPlaying = false;
  updateAllButtons("Play");
  progressBar.value = 0;
  playTime.textContent = "0:00";
  updateProgressBar();
});

// Khi kéo thanh trượt
progressBar.addEventListener("input", () => {
  isDragging = true;
  playTime.textContent = formatTime(progressBar.value);
  updateProgressBar();
});

// Khi thả thanh trượt → Cập nhật vị trí nhạc
progressBar.addEventListener("change", () => {
  audio.currentTime = progressBar.value;
  isDragging = false;
});

// Cập nhật màu nền thanh trượt theo tiến trình
function updateProgressBar() {
  const value = (progressBar.value / progressBar.max) * 100;
  progressBar.style.background = `linear-gradient(to right, lime ${value}%, gray ${value}%)`;
}

// Đặt màu nền ban đầu
updateProgressBar();
