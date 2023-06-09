//Plays the audio when hovering over playlists (Must click on page anywhere atleast once)

document.addEventListener('DOMContentLoaded', () => {
  let moreElements = document.querySelectorAll('.more');

  moreElements.forEach((moreElement) => {
    let enterAudio = moreElement.nextElementSibling;
    let leaveAudio = enterAudio.nextElementSibling;

    let fadeOutInterval;

    moreElement.addEventListener('mouseover', () => {
      enterAudio.load();
      enterAudio.volume = 1;
      enterAudio.play();

      clearInterval(fadeOutInterval);
    });

    moreElement.addEventListener('mouseleave', () => {
      fadeOutInterval = setInterval(() => {
        enterAudio.volume -= 0.1;
        if (enterAudio.volume <= 0) {
          enterAudio.pause();
          enterAudio.currentTime = 0;
          clearInterval(fadeOutInterval);
        }
      }, 100);
    });

    enterAudio.play(); 
    enterAudio.pause(); 
  });
});