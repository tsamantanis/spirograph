const canvas = document.getElementById('spirograph');
const ctx = canvas.getContext('2d');

let posX = canvas.width / 2;
let posY = canvas.height / 2;

const strokeWidth = 2;
const sides = 5;
const bigRadius = 240;
const smallRadius = 75;
const ratio = 50;

const colors = [
    '#7400B8',
    '#6930C3',
    '#5E60CE',
    '#5390D9',
    '#4EA8DE',
    '#48BFE3',
    '#56CFE1',
    '#64DFDF',
    '#72EFDD',
    '#80FFDB'
];

function draw() {
    let x, y;
    ctx.beginPath();
    ctx.moveTo(posX + smallRadius + bigRadius, posY);

    for (angle = 0; angle <= Math.PI * 2; angle += 0.01) {
        x = posX + smallRadius * Math.cos(angle) + bigRadius * Math.cos(angle * ratio);
        y = posY + smallRadius * Math.sin(angle) + bigRadius * Math.sin(angle * ratio);
        ctx.lineTo(x, y);
    }
    const gradient = ctx.createLinearGradient(0, 0, 750, 750);
    gradient.addColorStop(0.1, '#7400B8');
    gradient.addColorStop(0.2, '#6930C3');
    gradient.addColorStop(0.3, '#5E60CE');
    gradient.addColorStop(0.4, '#5390D9');
    gradient.addColorStop(0.5, '#4EA8DE');
    gradient.addColorStop(0.6, '#48BFE3');
    gradient.addColorStop(0.7, '#56CFE1');
    gradient.addColorStop(0.8, '#64DFDF');
    gradient.addColorStop(0.9, '#72EFDD');
    gradient.addColorStop(1, '#80FFDB');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
}


draw();
