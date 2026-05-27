/**
 * Affiche/masque le bouton « retour en haut » selon le scroll.
 */
export function initialiserBoutonHaut() {
    const bouton = document.getElementById('btnHaut');
    if (!bouton) return;

    window.addEventListener('scroll', () => {
        bouton.classList.toggle('visible', window.scrollY > 500);
    });

    bouton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Ajoute l'animation d'apparition au scroll sur les éléments clés.
 */
export function initialiserReveals() {
    const elements = document.querySelectorAll(
        '.section-heading, .projet-card, .timeline-item, .carte-formation, .competence, .formulaire, .contact-card, .profil-card'
    );

    elements.forEach((element) => {
        element.classList.add('reveal');
    });

    const observateur = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observateur.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    elements.forEach((element) => observateur.observe(element));
}

/**
 * Affiche un fallback si l'image de profil ne se charge pas.
 */
export function gererImageProfil() {
    const image = document.querySelector('.photo-profil img');
    if (!image) return;

    image.addEventListener('error', () => {
        image.style.display = 'none';
        image.parentElement.setAttribute('aria-label', 'Profil de Matheo');
        image.parentElement.innerHTML = '<div class="profil-fallback">MS</div>';
    }, { once: true });
}
