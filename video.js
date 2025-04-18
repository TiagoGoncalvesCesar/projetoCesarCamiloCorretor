

const playButton = document.getElementById('play-button');
const introVideo = document.getElementById('intro-video');
const videoIntro = document.getElementById('video-intro');
const skipButton = document.getElementById('skip-button');
document.body.style.overflow = 'hidden';



function esconderVideoIntro() {
  videoIntro.style.transition = 'opacity 1s ease';
  videoIntro.style.opacity = '0';

  setTimeout(() => {
    // Remove completamente o elemento do DOM
    videoIntro.remove();
    // Libera o scroll, se estiver travado
    document.body.style.overflow = 'auto';
  }, 1000);
}


// Verifica se já assistiu nesta sessão
const videoVisto = sessionStorage.getItem('videoAssistido');

/*if (videoVisto === 'true') {
  videoIntro.style.display = 'none';
}*/
if (videoVisto === 'true') {
  videoIntro.style.display = 'none';
  document.body.style.overflow = 'auto'; // Libera o scroll mesmo se o vídeo já tiver sido visto
}

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  introVideo.style.display = 'block';
  skipButton.style.display = 'block';
  introVideo.play();
});

introVideo.addEventListener('ended', () => {
  sessionStorage.setItem('videoAssistido', 'true');
  esconderVideoIntro();
});

skipButton.addEventListener('click', () => {
  introVideo.pause();
  sessionStorage.setItem('videoAssistido', 'true');
  esconderVideoIntro();
});






