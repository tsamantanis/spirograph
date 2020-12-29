const canvas = document.getElementById('polygon');
const ctx = canvas.getContext('2d');

let posX = canvas.width / 2;
let posY = canvas.height / 2;

const strokeWidth = 3;
const sides = 5;
const startRadius = 50;

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

function poly(edges, radius, startAngle = -90, colorIndex) {
    edges = edges === 0 ? 1 : edges;
    let angle = 360 / edges;
    ctx.beginPath();
    for (let i = 0; i <= edges; i++) {
        const a = ((angle * i) + startAngle) * (Math.PI / 180);
        const x = posX + radius * Math.cos(a);
        const y = posY + radius * Math.sin(a);
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = colors[colorIndex];
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
}

function draw(angles, radius) {
    angles.forEach((item, i) => {
        setTimeout(function () {
            poly(sides, radius, item.angle / sides, item.colorIndex);
        }, i * 500);
    });
}

function setup() {
    let radius = 350;
    while (radius > startRadius) {
        let angle = 0;
        let angles = [];
        while (angle < 360) {
            const colorIndex = angle < 60 ? 0 : parseInt(angle / 60) % 10;
            angles.push({angle: angle, colorIndex: colorIndex});
            angle += 60;
        }
        draw(angles, radius);

        // radius = sides < 5 ? sides % 2 === 0 ? radius * Math.sqrt(2) : 2 * radius : radius + 0.5 * radius;
        radius = radius - (radius * Math.sin(Math.PI / sides)) / Math.sqrt(3);
        // radius = radius + (Math.tan(Math.PI / sides))
    }
}

setup();
