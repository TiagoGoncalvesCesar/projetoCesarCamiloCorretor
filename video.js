

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("video-overlay");
  const video = document.getElementById("intro-video");
  const skipBtn = document.getElementById("skip-button");

  if (!sessionStorage.getItem("videoWatched")) {
    document.body.style.overflow = "hidden";
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }

  function finishIntro() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    sessionStorage.setItem("videoWatched", "true");
  }

  video.addEventListener("ended", finishIntro);
  skipBtn.addEventListener("click", () => {
    video.pause();
    finishIntro();
  });
});







