/**
 * Portfolio — thème, horloge, copie d'email, halo des cartes et apparition au scroll.
 */
document.documentElement.classList.add('js');

const reduitAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Thème clair / sombre (le thème initial est posé dans <head>) ─── */
function initialiserTheme() {
    const bouton = document.getElementById('themeBtn');
    if (!bouton) return;

    const majLabel = () => {
        const clair = document.documentElement.dataset.theme === 'light';
        bouton.setAttribute('aria-label', clair ? 'Passer en thème sombre' : 'Passer en thème clair');
    };

    majLabel();

    bouton.addEventListener('click', () => {
        const nouveau = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = nouveau;
        try {
            localStorage.setItem('portfolio-theme', nouveau);
        } catch (e) {
            // Stockage indisponible (navigation privée…) : le thème reste valable pour la session.
        }
        majLabel();
    });
}

/* ─── Heure locale à Nancy ─── */
function initialiserHorloge() {
    const horloge = document.getElementById('horloge');
    if (!horloge) return;

    const format = new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris',
    });

    const maj = () => {
        horloge.textContent = `${format.format(new Date())} heure locale`;
    };

    maj();
    setInterval(maj, 30000);
}

/* ─── Bouton « Copier l'adresse » ─── */
function initialiserCopieEmail() {
    const bouton = document.getElementById('copyBtn');
    const feedback = document.getElementById('copyFeedback');
    if (!bouton || !feedback) return;

    bouton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(bouton.dataset.email);
            feedback.textContent = 'Adresse copiée ✓';
        } catch (e) {
            feedback.textContent = bouton.dataset.email;
        }
        setTimeout(() => {
            feedback.textContent = '';
        }, 2500);
    });
}

/* ─── Halo qui suit la souris sur les cartes ─── */
function initialiserHalo() {
    if (reduitAnimations || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.card').forEach((carte) => {
        carte.addEventListener('pointermove', (event) => {
            const rect = carte.getBoundingClientRect();
            carte.style.setProperty('--mx', `${event.clientX - rect.left}px`);
            carte.style.setProperty('--my', `${event.clientY - rect.top}px`);
        });
    });
}

/* ─── Apparition des cartes au scroll ─── */
function initialiserReveals() {
    const elements = document.querySelectorAll('.card, .section-head');

    if (reduitAnimations || !('IntersectionObserver' in window)) return;

    elements.forEach((element) => element.classList.add('reveal'));

    const observateur = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observateur.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach((element) => observateur.observe(element));
}

initialiserTheme();
initialiserHorloge();
initialiserCopieEmail();
initialiserHalo();
initialiserReveals();

const annee = document.getElementById('annee');
if (annee) annee.textContent = new Date().getFullYear();
