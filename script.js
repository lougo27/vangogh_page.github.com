document.addEventListener('DOMContentLoaded', () => {
    const challenge = document.getElementById('challenge');

    challenge.addEventListener('mousemove', (e) => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const x = e.clientX - challenge.getBoundingClientRect().left;
        const y = e.clientY - challenge.getBoundingClientRect().top;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        challenge.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000); // Effacement de l'étoile après 1 seconde
    });
});
