/**
 * Point d'entrée principal — importe et initialise tous les modules.
 */
import { creerFondAnime } from './animation.js';
import { initialiserMenu } from './menu.js';
import { initialiserTheme } from './theme.js';
import { initialiserFormulaire } from './form.js';
import { initialiserBoutonHaut, initialiserReveals, gererImageProfil } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    creerFondAnime();
    initialiserMenu();
    initialiserTheme();
    initialiserFormulaire();
    initialiserBoutonHaut();
    initialiserReveals();
    gererImageProfil();
});
