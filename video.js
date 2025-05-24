
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("video-overlay");
  const video = document.getElementById("intro-video");
  const skipBtn = document.getElementById("skip-button");

  const finishIntro = () => {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    sessionStorage.setItem("videoWatched", "true");

    // Se estiver em tela cheia, sair
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  if (!sessionStorage.getItem("videoWatched")) {
    document.body.style.overflow = "hidden";
    overlay.style.display = "flex";

    video.addEventListener("ended", finishIntro);

    skipBtn.addEventListener("click", () => {
      video.pause();
      finishIntro();
    });

    // Se o usuário sair da tela cheia manualmente, corrigir overflow
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement && overlay.style.display === "none") {
        document.body.style.overflow = "auto";
      }
    });
  } else {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});













