const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const displayingSize = document.querySelector('#size');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('#clear');

let size = 15;
let isPressed = false;
let color = 'black';
let x;
let y;

const { width, height } = canvas;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

function mouseUpFunct() {
    isPressed = false;

    x = y = undefined;
}

canvas.addEventListener('mouseup', mouseUpFunct);

canvas.addEventListener('mousemove', (e) => {
    if(e.offsetX <= 10 || e.offsetX >= 490) {
        mouseUpFunct();
        return;
    }
    if(e.offsetY <= 10 || e.offsetY >= 490) {
        mouseUpFunct();
        return;
    }
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
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
});

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function updateSizeOnDisplay() {
    displayingSize.innerText = size;
}