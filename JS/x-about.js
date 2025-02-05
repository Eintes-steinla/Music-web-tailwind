const about = document.getElementById("about");
const aboutDes = document.getElementById("about-des");
const xAbout = document.getElementById("x-about");

about.addEventListener("click", () => {
  aboutDes.classList.remove("hidden");
});

xAbout.addEventListener("click", () => {
  aboutDes.classList.add("hidden");
});
