const canvas = document.getElementById('spiral');
const ctx = canvas.getContext('2d');

let posX = canvas.width / 2;
let posY = canvas.height / 2;

const strokeWidth = 2;
const strokeColor = '#ab42b6';
const radiusIncrement = 1;

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

function drawArc(x, y, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

}

function display(positions) {
    positions.forEach((item, i) => {
        setTimeout(function() {
            drawArc(item.x, item.y, item.color)
        }, i * 50)
    });
}

function getCoordinates() {
    let positions = [];
    let angle = 0;
    let radius = 15;
    while (angle < 360) {
        const x = posX + radius * Math.cos(angle);
        const y = posY + radius * Math.sin(angle);
        colorIndex = radius < 45 ? 0 : radius / 45 % 10;
        positions.push({x: x, y: y, color: colors[colorIndex]})
        angle += 1;
        radius += radiusIncrement;
    }
    display(positions);
}

getCoordinates();
