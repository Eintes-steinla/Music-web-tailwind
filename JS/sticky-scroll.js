const stickyHeader = document.getElementById("sticky-header");
const main = document.getElementById("main");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    stickyHeader.classList.add("hidden"); // Ẩn khi cuộn xuống quá 300px
  } else {
    stickyHeader.classList.remove("hidden"); // Hiện lại khi cuộn lên
  }
});
