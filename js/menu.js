/**
 * Gère l'ouverture/fermeture du menu hamburger (mobile).
 */
export function initialiserMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.menu a').forEach((lien) => {
        lien.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}
