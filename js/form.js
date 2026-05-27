/**
 * Gère la soumission du formulaire de contact.
 */
export function initialiserFormulaire() {
    const formulaire = document.getElementById('formulaire');
    const feedback = document.getElementById('formFeedback');

    if (!formulaire) return;

    formulaire.addEventListener('submit', (event) => {
        event.preventDefault();

        if (feedback) {
            feedback.textContent = 'Merci, votre message a bien ete envoyé.';
        }

        formulaire.reset();
    });
}
