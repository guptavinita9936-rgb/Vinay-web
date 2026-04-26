// Particles Background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255,255,255,${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            animation-delay: ${Math.random() * 10}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Celebration Effect
function celebrate() {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    document.body.appendChild(celebration);
    
    // Confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = Math.random() * 3 + 's';
            celebration.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
    
    // Screen shake
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
    
    // Cake bounce
    const cake = document.querySelector('.cake');
    cake.style.animation = 'bounce 0.6s ease-in-out';
    setTimeout(() => {
        cake.style.animation = '';
    }, 600);
    
    setTimeout(() => {
        celebration.remove();
    }, 4000);
}

// Modal functionality
const customizeModal = document.getElementById('customizeModal');
const customizeBtn = document.getElementById('customizeBtn');
const closeBtn = document.querySelector('.close');
const saveBtn = document.getElementById('saveBtn');
const nameElement = document.getElementById('name');

customizeBtn.onclick = () => {
    customizeModal.style.display = 'block';
}

closeBtn.onclick = () => {
    customizeModal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === customizeModal) {
        customizeModal.style.display = 'none';
    }
}

saveBtn.onclick = () => {
    const customName = document.getElementById('customName').value || 'Friend';
    const customMessage = document.getElementById('customMessage').value || 'Wishing you a fantastic year ahead!';
    
    nameElement.textContent = customName;
    document.querySelector('.subtext').textContent = customMessage;
    
    customizeModal.style.display = 'none';
}

// Event Listeners
document.getElementById('celebrateBtn').onclick = celebrate;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
