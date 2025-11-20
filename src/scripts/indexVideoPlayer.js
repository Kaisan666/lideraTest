import { openPopup, addBackground } from "./popupForm";

const videoPlayer = document.querySelector(".hero__video-player");
if (videoPlayer){
const playButton = videoPlayer.querySelector(".hero__video-player-play-button");
const video = videoPlayer.querySelector(".hero__video-player-video");

let isPopupShown = false;
playButton.addEventListener("click", (e) => {
  videoPlayer.classList.add("active");
  video.play();

  video.addEventListener("timeupdate", videoPlayingHandler);
  video.addEventListener("seeked", videoPlayingHandler);
});

function videoPlayingHandler(e) {
  
  const videoDuration = e.target.duration;
  if (isNaN(videoDuration)) {
    return;
  }
  if (e.target.currentTime >= (videoDuration / 2) && !isPopupShown) {
    addBackground(".index-page.popup-form");
    openPopup();
    isPopupShown = true;
  }
  if (isPopupShown && !e.target.paused){
    e.target.pause()
    video.removeEventListener("timeupdate", videoPlayingHandler);
  video.removeEventListener("seeked", videoPlayingHandler);
  }
  
  
}
}
