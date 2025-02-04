document.getElementById("follow-button").addEventListener("click", function () {
  const span = this.querySelector("span");
  span.textContent = span.textContent === "Following" ? "Follow" : "Following";
});
