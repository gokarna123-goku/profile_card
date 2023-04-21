// DOM Elements
const audioPlayer = document.querySelector('#audio-player');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const albumsBtn = document.querySelector('#albums-btn');
const artistsBtn = document.querySelector('#artists-btn');
const listsBtn = document.querySelector('#lists-btn');
const themeBtn = document.querySelector('#theme-btn');
const themeImg = document.querySelector('#theme-img');
const albumSection = document.querySelector('#album-section');
const artistSection = document.querySelector('#artist-section');
const listSection = document.querySelector('#list-section');

// Audio Player
let isPlaying = false;

function playAudio() {
	audioPlayer.play();
	isPlaying = true;
	playBtn.style.display = 'none';
	pauseBtn.style.display = 'block';
}

function pauseAudio() {
	audioPlayer.pause();
	isPlaying = false;
	playBtn.style.display = 'block';
	pauseBtn.style.display = 'none';
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);

// Navigation
function showAlbums() {
	albumSection.style.display = 'grid';
	artistSection.style.display = 'none';
	listSection.style.display = 'none';
}

function showArtists() {
	albumSection.style.display = 'none';
	artistSection.style.display = 'grid';
	listSection.style.display = 'none';
}

function showLists() {
	albumSection.style.display = 'none';
	artistSection.style.display = 'none';
	listSection.style.display = 'block';
}

albumsBtn.addEventListener('click', showAlbums);
artistsBtn.addEventListener('click', showArtists);
listsBtn.addEventListener('click', showLists);

// Theme
let themeIndex = 0;
const themeImages = ['background1.jpg', 'background2.jpg', 'background3.jpg'];

function changeTheme() {
	themeIndex = (themeIndex + 1) % themeImages.length;
	themeImg.src = themeImages[themeIndex];
}

themeBtn.addEventListener('click', changeTheme);
