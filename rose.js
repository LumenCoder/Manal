function drawRose() {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    const k = 4;
    const n = 1000;
    const c = 4;

    ctx.beginPath();
    for (let theta = 0; theta < Math.PI * 2 * k; theta += Math.PI / n) {
        const r = canvas.height / 4 * Math.sin(c * theta);
        const x = canvas.width / 2 + r * Math.cos(theta);
        const y = canvas.height / 2 - r * Math.sin(theta);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}
