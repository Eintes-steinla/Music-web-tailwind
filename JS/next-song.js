const songs = [
  {
    picture: "./public/assets/main/track/xxx.jpg",
    artist: "XXXTENTACION",
    title: "Look At Me!",
    audio: "./public/songs/look-at-me.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "SKINNY",
    audio: "./public/songs/Billie-Eilish/SKINNY.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "LUNCH",
    audio: "./public/songs/Billie-Eilish/LUNCH.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "CHIHIRO",
    audio: "./public/songs/Billie-Eilish/CHIHIRO.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "BIRDS OF A FEATHER",
    audio: "./public/songs/Billie-Eilish/BIRDS-OF-A-FEATHER.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "WILDFLOWER",
    audio: "./public/songs/Billie-Eilish/WILDFLOWER.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "THE GREATEST",
    audio: "./public/songs/Billie-Eilish/THE-GREATEST.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "L’AMOUR DE MA VIE",
    audio: "./public/songs/Billie-Eilish/L’AMOUR-DE-MA-VIE.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "THE DINER",
    audio: "./public/songs/Billie-Eilish/THE-DINER.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "BITTERSUITE",
    audio: "./public/songs/Billie-Eilish/BITTERSUITE.mp3",
  },
  {
    picture: "./public/assets/aside/BILLIE-EILISH/HIT-ME-HARD-AND-SOFT.jpg",
    artist: "Billie Eilish",
    title: "BLUE",
    audio: "./public/songs/Billie-Eilish/BLUE.mp3",
  },
];

let currentIndex = 0;

function loadSong(index) {
  const picture = document.getElementById("picture-song");
  const title = document.getElementById("title-song");
  const artist = document.getElementById("artist-song");
  const audio = document.getElementById("audio-song");

  picture.src = songs[index].picture;
  artist.innerText = songs[index].artist;
  title.innerText = songs[index].title;
  audio.src = songs[index].audio;

  let allLabels = document.querySelectorAll(".play-button-song input");
  if (audio.paused) {
    audio.play();
    allLabels.forEach((input) => (input.checked = false));
  } else {
    audio.pause();
    allLabels.forEach((input) => (input.checked = true));
  }

  // Tải và phát nhạc mới
  audio.load();
  if (!audio.play()) audio.play();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length; // Chuyển bài, quay lại đầu khi hết danh sách
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length; // Quay lại bài trước
  loadSong(currentIndex);
}

// Gán sự kiện cho nút
document.getElementById("next-song").addEventListener("click", nextSong);
document.getElementById("prev-song").addEventListener("click", prevSong);

// Tải bài hát đầu tiên khi trang web chạy
// loadSong(currentIndex);
