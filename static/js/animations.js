// Animasi teks berkilau
function sparkleText() {
    const elements = document.querySelectorAll('.sparkle-text');
    elements.forEach(el => {
        el.innerHTML = el.textContent.split('').map(letter => 
            `<span class="sparkle-letter">${letter}</span>`
        ).join('');
        
        const letters = el.querySelectorAll('.sparkle-letter');
        letters.forEach((letter, i) => {
            letter.style.display = 'inline-block';
            letter.style.transition = 'all 0.3s ease';
            setInterval(() => {
                letter.style.transform = 'scale(1.2)';
                letter.style.color = getRandomColor();
                setTimeout(() => {
                    letter.style.transform = 'scale(1)';
                    letter.style.color = '';
                }, 300);
            }, 1000 + Math.random() * 2000);
        });
    });
}

// Animasi kue berputar
function animateCake() {
    const cake = document.querySelector('.cake');
    let angle = 0;
    setInterval(() => {
        angle = (angle + 2) % 360;
        cake.style.transform = `rotate(${angle}deg)`;
    }, 100);
}

// Animasi background berdenyut
function pulseBackground() {
    const colors = ['#ffcce6', '#e6f2ff', '#e6ffe6', '#fff2e6'];
    let current = 0;
    const bg = document.querySelector('.bg-pulse');
    setInterval(() => {
        current = (current + 1) % colors.length;
        bg.style.backgroundColor = colors[current];
        bg.style.transition = 'background-color 2s ease';
    }, 3000);
}

// Helper function
function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Inisialisasi semua animasi
document.addEventListener('DOMContentLoaded', () => {
    sparkleText();
    animateCake();
    pulseBackground();
});