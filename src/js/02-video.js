import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(savePlayingTime, 1000));

function savePlayingTime({ seconds }) {
    try {
        localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
}

function updatePlayTime() {
    try {
        const getPlayingTime = localStorage.getItem(TIME_KEY);
        if (getPlayingTime) {
            player.setCurrentTime(JSON.parse(getPlayingTime));
        }
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
}

updatePlayTime();



