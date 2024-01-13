import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the videos!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const setTime = throttle(function (time) {
  const currentTime = time.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  // console.log('current time:' + currentTime);
}, 1000);
player.on('timeupdate', setTime);

const savedTime = localStorage.getItem('videoplayer-current-time');
// console.log('savedTime:' + savedTime);

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
