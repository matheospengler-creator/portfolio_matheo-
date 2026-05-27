/**
 * Génère et injecte les particules du fond animé.
 */
export function creerFondAnime() {
    const fond = document.getElementById('fondAnime');
    if (!fond) return;

    const nombreParticules = 24;

    for (let i = 0; i < nombreParticules; i += 1) {
        const particule = document.createElement('div');
        const taille = Math.random() * 10 + 6;

        particule.className = 'particule';
        particule.style.width = `${taille}px`;
        particule.style.height = `${taille}px`;
        particule.style.left = `${Math.random() * 100}%`;
        particule.style.top = `${Math.random() * 100}%`;
        particule.style.animationDuration = `${Math.random() * 8 + 10}s`;
        particule.style.animationDelay = `${Math.random() * 5}s`;

        fond.appendChild(particule);
    }
}
