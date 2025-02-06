const audio = document.getElementById("audio-song");
const progressBar = document.getElementById("play-progress");
const playTime = document.getElementById("play-time");
const playButtons = document.querySelectorAll(".play-button-bg-song"); // Nút nền
const playCheckboxes = document.querySelectorAll(".play-button-song input"); // Checkbox

let isPlaying = false;
let isDragging = false;

// Chuyển giây thành định dạng mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Khi bấm vào nút nền (play-button-bg-song)
playButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const checkbox = playCheckboxes[index]; // Lấy checkbox bên trong nút

    if (!checkbox.checked) {
      checkbox.checked = true; // Check → Tắt nhạc
      audio.pause();
      isPlaying = false;
    } else {
      checkbox.checked = false; // Uncheck → Phát nhạc
      audio.play();
      isPlaying = true;
    }

    syncCheckboxes(checkbox.checked);
  });
});

// Đồng bộ trạng thái của tất cả các checkbox
function syncCheckboxes(state) {
  playCheckboxes.forEach((checkbox) => {
    checkbox.checked = state;
  });
}

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
  progressBar.value = 0;
  playTime.textContent = "0:00";
  syncCheckboxes(false); // Uncheck tất cả khi nhạc kết thúc
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
