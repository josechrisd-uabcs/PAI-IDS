window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    if(!ctx) return;
    
    ctx.fillStyle = "#7d88e5";
    ctx.fillRect(100, 100, 100, 100);
    
    ctx.fillStyle = "#cd0009";
    ctx.fillRect(180, 180, 100, 100);
    
    ctx.fillStyle = "rgba(255,0,255,0.5)";
    ctx.fillRect(260, 260, 100, 100);

    ctx.fillStyle = "#ff8888";
    ctx.strokeStyle = "#ff8888";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(300, 200)
    ctx.lineTo(350, 200);
    ctx.lineTo(325, 150);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(400, 110, 50, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(510, 110, 50, 0, 2 * Math.PI);
    ctx.stroke();
})