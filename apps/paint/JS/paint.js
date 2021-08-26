const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const displayingSize = document.querySelector('#size');
const colorEl = document.querySelector('#color');

let size = 15;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;
        drawCircle(x, y);
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

increaseBtn.addEventListener('click', () => {
    size += 5;

    if (size > 50) size = 50;
    updateSizeOnDisplay();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size < 5) size = 5;
    updateSizeOnDisplay();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

function updateSizeOnDisplay() {
    displayingSize.innerText = size;
}