const japanTripDay = new Date("2026-09-18");

// Actualizar cuenta regresiva
const updateCountdown = () => {
  const now = new Date();
  const timeLeft = japanTripDay - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  document.getElementById(
    "countdown"
  ).innerText = `${days}:${hours}:${minutes}:${seconds}`;
};
setInterval(updateCountdown, 1000); // Actualizar cada segundo

const images = [
  "/assets/photos/fuji.jpg",
  "/assets/photos/gundam.jpg",
  "/assets/photos/Hachiko.jpg",
  "/assets/photos/Himeji.jpg",
  "/assets/photos/Himeji.webp",
  "/assets/photos/Hokkaido.jpg",
  "/assets/photos/Kamakura.webp",
  "/assets/photos/Kobe.jpg",
  "/assets/photos/kumamoto.jpg",
  "/assets/photos/kumamoto2.jpg",
  "/assets/photos/Kumamoto3.jpg",
  "/assets/photos/Kumano.jpg",
  "/assets/photos/kyoto.jpg",
  "/assets/photos/Nara.jpg",
  "/assets/photos/Nara.webp",
  "/assets/photos/neko.jpeg",
  "/assets/photos/Nikko.jpg",
  "/assets/photos/Okinawa.jpg",
  "/assets/photos/Osaka.jpg",
  "/assets/photos/reality1.jpg",
  "/assets/photos/shibuya.jpg",
  "/assets/photos/Takayama.jpg",
  "/assets/photos/Yokohama.jpg",
  "/assets/photos/tokyo.avif",
  "/assets/photos/street.avif",
];

const songs = [
  "/assets/songs/Jujutsu.mp3",
  "/assets/songs/Shangrila.mp3",
  "/assets/songs/Kenshin.mp3",
  "/assets/songs/FMA.mp3",
  "/assets/songs/Clover.mp3",
  "/assets/songs/Yuri.mp3",
  "/assets/songs/Death.mp3",
  "/assets/songs/Frontier.mp3",
  "/assets/songs/Tamers.mp3",
  "/assets/songs/Dororo EN.mp3",
  "/assets/songs/Dororo OP.mp3",
  "/assets/songs/Jiraiya.mp3",
  "/assets/songs/Kimetsu.mp3",
  "/assets/songs/Mashle.mp3",
  "/assets/songs/Howl.mp3",
  "/assets/songs/Gundam (1).mp3",
  "/assets/songs/Gundam (2).mp3",
  "/assets/songs/Gundam (3).mp3",
  "/assets/songs/Naruto (1).mp3",
  "/assets/songs/Naruto (2).mp3",
  "/assets/songs/Chainsaw (1).mp3",
  "/assets/songs/Chainsaw (2).mp3",
  "/assets/songs/Chainsaw (3).mp3",
  "/assets/songs/OnePiece.mp3",
  "/assets/songs/SaintSeiya.mp3",
  "/assets/songs/shingeky (1).mp3",
  "/assets/songs/shingeky (2).mp3",
  "/assets/songs/Oshiete.mp3",
  "/assets/songs/FFXV.mp3",
  "/assets/songs/King.mp3",
  "/assets/songs/Viktor.mp3",
  "/assets/songs/Agape.mp3",
  "/assets/songs/Shimauta.mp3",
];

let lastSongIndex = -1; // Guardar el índice de la última canción reproducida

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const getRandomSong = () => {
  let randomIndex;

  // Asegurarse de que la próxima canción no sea la misma que la anterior
  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (randomIndex === lastSongIndex);

  lastSongIndex = randomIndex; // Actualizar el índice de la última canción reproducida
  return songs[randomIndex];
};

const setRandomBackgroundImage = () => {
  const img1 = document.getElementById("japan-img1");
  const img2 = document.getElementById("japan-img2");

  const visibleImg = img1.classList.contains("visible") ? img1 : img2;
  const hiddenImg = visibleImg === img1 ? img2 : img1;

  hiddenImg.src = getRandomImage(); // Cargar nueva imagen en la imagen oculta

  hiddenImg.classList.remove("hidden");
  hiddenImg.classList.add("visible");
  visibleImg.classList.remove("visible");
  visibleImg.classList.add("fade");

  setTimeout(() => {
    visibleImg.classList.remove("fade");
    visibleImg.classList.add("hidden");
  }, 1500);
};
setRandomBackgroundImage();
setInterval(setRandomBackgroundImage, 10000);

const audioElement = document.getElementById("background-audio");
audioElement.src = getRandomSong();
let isPlaying = false;
const togglePlayPause = () => {
  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
    document.getElementById("toggle-play-pause-btn").innerText = "►";
  } else {
    audioElement.play();
    isPlaying = true;
    document.getElementById("toggle-play-pause-btn").innerText = "||";
  }
};
const playRandomSong = () => {
  const newSong = getRandomSong();
  audioElement.src = newSong;
  audioElement.play();
  isPlaying = true;
};
document
  .getElementById("toggle-play-pause-btn")
  .addEventListener("click", () => {
    togglePlayPause();
  });

audioElement.addEventListener("ended", () => {
  playRandomSong();
});

const nextSong = () => {
  audioElement.pause();
  playRandomSong();
};
document.getElementById("next-song-btn").addEventListener("click", nextSong);
