document.querySelector(".play-button-bg").addEventListener("click", () => {
  const checkbox = document.querySelector(".play-button input");
  checkbox.checked = !checkbox.checked;
});
