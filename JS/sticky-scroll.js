const stickyHeader = document.getElementById("sticky-header");
const main = document.getElementById("main");

main.addEventListener("scroll", () => {
  if (main.scrollTop > 300) {
    stickyHeader.classList.add("hidden");
  } else {
    stickyHeader.classList.remove("hidden");
  }
});
