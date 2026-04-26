const loader = document.getElementById('loader');
const matrixScreen = document.getElementById('matrix-screen');
const celebrationScreen = document.getElementById('celebration-screen');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('play-pause-btn');

// 1. Loading sequence (3 seconds)
setTimeout(() => {
    loader.classList.remove('active');
    matrixScreen.classList.add('active');
    initMatrix();
}, 3000);

function initMatrix() {
    const grid = document.getElementById('matrix-grid');
    const totalCells = 25 * 30; // 25 cols * 30 rows

    for (let i = 0; i < totalCells; i++) {
        const char = document.createElement('span');
        char.innerText = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        char.id = `c-${i}`;
        grid.appendChild(char);
    }
    
    // Matrix effect ke baad celebration par jaane ka timer
    setTimeout(() => {
        matrixScreen.classList.remove('active');
        celebrationScreen.classList.add('active');
    }, 10000); // 10 seconds matrix phase
}

// Music Play/Pause
musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.style.background = "#ff69b4";
    } else {
        music.pause();
        musicBtn.style.background = "rgba(255, 105, 180, 0.3)";
    }
};
