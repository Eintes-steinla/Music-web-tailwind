document.querySelectorAll(".add-to-playlist").forEach((container) => {
  const firstSvg = container.querySelector("svg:first-of-type");
  const secondSvg = container.querySelector("svg:last-of-type");

  firstSvg.addEventListener("click", (e) => {
    e.stopPropagation();
    firstSvg.classList.add("hidden");
    secondSvg.classList.remove("hidden");
  });

  secondSvg.addEventListener("click", (e) => {
    e.stopPropagation();
    firstSvg.classList.remove("hidden");
    secondSvg.classList.add("hidden");
  });
});

document.querySelectorAll(".track-main").forEach((track) => {
  if (track.id === "five-line") {
    const playing = document.getElementById("playing");
    const stop = document.getElementById("five-line-stop");

    if (window.matchMedia("(max-width: 639.99px)").matches) {
      track.addEventListener("click", (e) => {
        e.stopPropagation();
        playing.classList.add("hidden");
        stop.classList.remove("hidden");
      });
      document.addEventListener("click", (e) => {
        e.stopPropagation();
        playing.classList.remove("hidden");
        stop.classList.add("hidden");
      });
    } else {
      track.addEventListener("pointerenter", (e) => {
        e.stopPropagation();
        playing.classList.add("hidden");
        playing.classList.remove("flex");
        stop.classList.remove("hidden");
      });
      track.addEventListener("pointerleave", (e) => {
        e.stopPropagation();
        playing.classList.remove("hidden");
        playing.classList.add("flex");
        stop.classList.add("hidden");
      });
    }

    return;
  }

  track.addEventListener("pointerenter", (e) => {
    e.stopPropagation();
    const container = track.querySelector(".stt-play");
    if (!container) return;

    const firstSvg = container.querySelector("span:first-of-type");
    const secondSvg = container.querySelector("span:last-of-type");

    firstSvg.classList.add("hidden");
    secondSvg.classList.remove("hidden");
  });

  track.addEventListener("pointerleave", (e) => {
    e.stopPropagation();
    const container = track.querySelector(".stt-play");
    if (!container) return;

    const firstSvg = container.querySelector("span:first-of-type");
    const secondSvg = container.querySelector("span:last-of-type");

    firstSvg.classList.remove("hidden");
    secondSvg.classList.add("hidden");
  });
});
