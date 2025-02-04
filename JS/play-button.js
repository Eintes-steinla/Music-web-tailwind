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
