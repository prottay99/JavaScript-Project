let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let time = document.getElementById("time");
let musicTime = document.getElementById("music-Time");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}
const songTime = (currentTime) => {
  let minutes = currentTime / 60;
  let remainingSecond = currentTime % 60;
  return `${parseInt(minutes)}:${parseInt(remainingSecond)} `;
};

const songDuration = (duration) => {
  let minutes = duration / 60;
  let remainingSecond = duration % 60;
  return `${parseInt(minutes)}:${parseInt(remainingSecond)}`;
};

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    time.innerHTML = songTime(song.currentTime);
    musicTime.innerHTML = songDuration(song.duration);
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
};
