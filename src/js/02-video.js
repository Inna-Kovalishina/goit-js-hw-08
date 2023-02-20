import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(savePlayingTime, 1000));

function savePlayingTime({seconds}) {
    localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
}

const updatePlayingTime = localStorage.getItem(TIME_KEY);

if (updatePlayingTime) {
    player.setCurrentTime(JSON.parse(updatePlayingTime));
}

