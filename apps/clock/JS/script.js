function drawClock(typeOfClock) {
    if(typeOfClock == 'analog') {
        const analogClock = document.querySelector('#analog-clock');
        analogClock.style.display = 'block';
        const digitalClock = document.querySelector('#digital-clock');
        digitalClock.style.display = 'none';
    }
    else if (typeOfClock == 'digital') {
        const analogClock = document.querySelector('#analog-clock');
        analogClock.style.display = 'none';
        const digitalClock = document.querySelector('#digital-clock');
        digitalClock.style.display = 'block';
    }
}