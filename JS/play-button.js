document.querySelectorAll(".play-button-bg").forEach((button) => {
  button.addEventListener("click", () => {
    const isChecked = document.querySelector(".play-button input").checked; // Lấy trạng thái của 1 nút
    document.querySelectorAll(".play-button input").forEach((checkbox) => {
      checkbox.checked = !isChecked; // Đồng bộ tất cả các nút
    });
  });
});
