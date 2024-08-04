document.getElementById('beginButton').addEventListener('click', () => {
    document.getElementById('container').style.display = 'none';
    document.getElementById('background').style.backdropFilter = 'none';
    document.getElementById('backgroundMusic').play();
    drawRose();
});
