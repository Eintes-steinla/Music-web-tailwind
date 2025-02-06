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

// space play song
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault(); // Ngăn cuộn trang khi bấm Space

    let audioSpace = document.getElementById("audio-song");

    if (audioSpace.paused) {
      audioSpace.play();
    } else {
      audioSpace.pause();
    }
  }
});
