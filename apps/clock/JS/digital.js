const timeEl = document.querySelector('#time');

let hour;
let minutes;

drawTime();

function setBackgroundAccordingToTime(hour) {
    if (hour >= 5 && hour < 12) {
        // Morning
        timeEl.style.background = 'linear-gradient(rgb(240, 177, 105), rgb(237, 164, 81))';
    }
    if (hour >= 12 && hour < 16) {
        // Afternoon
        timeEl.style.backgroundColor = 'rgb(154, 239, 245)';
	timeEl.style.color = 'black';
    }
    if (hour >= 16 && hour < 19) {
        // Evening
        timeEl.style.background = 'linear-gradient(rgb(240, 177, 105), rgb(237, 164, 81))';
    }

    if (hour >= 19) {
        // Night
        timeEl.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

function drawTime() {
    const date = new Date;
    hour = date.getHours();
    setBackgroundAccordingToTime(hour);
    if (hour > 12) {
        hour -= 12;
    }
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    timeEl.innerHTML = `${hour}:${minutes}:${seconds}`;
}

function getTime() {
    drawTime();
}

setInterval(getTime, 1000);