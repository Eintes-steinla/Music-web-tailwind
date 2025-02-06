function toggleCheckbox() {
  document.querySelectorAll(".play-button-bg").forEach((button) => {
    button.addEventListener("click", () => {
      const songCheckbox = button.querySelector(".play-button-song input");

      if (songCheckbox) {
        const isChecked = songCheckbox.checked;
        document
          .querySelectorAll(".play-button-song input")
          .forEach((checkbox) => {
            checkbox.checked = !isChecked;
          });
      } else {
        const checkbox = button.querySelector(".play-button input");
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
        }
      }
    });
  });
}

toggleCheckbox();

// space play song
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault(); // Ngăn cuộn trang khi bấm Space

    let audio = document.getElementById("audio-song");
    let allLabels = document.querySelectorAll(".play-button-song input");

    if (audio.paused) {
      audio.play();
      allLabels.forEach((input) => (input.checked = false));
    } else {
      audio.pause();
      allLabels.forEach((input) => (input.checked = true));
    }
  }
});
