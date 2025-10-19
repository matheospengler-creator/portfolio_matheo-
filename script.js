// Créer le fond animé avec particules
function creerFondAnime() {
    const fond = document.getElementById('fondAnime');
    const nombreParticules = 30;
    
    for (let i = 0; i < nombreParticules; i++) {
        const particule = document.createElement('div');
        particule.className = 'particule';
        
        // Taille aléatoire
        const taille = Math.random() * 5 + 2;
        particule.style.width = taille + 'px';
        particule.style.height = taille + 'px';
        
        // Position aléatoire
        particule.style.left = Math.random() * 100 + '%';
        particule.style.top = Math.random() * 100 + '%';
        
        // Durée d'animation aléatoire
        particule.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particule.style.animationDelay = Math.random() * 5 + 's';
        
        fond.appendChild(particule);
    }
}

// Lancer la création du fond
creerFondAnime();

// Menu Hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.menu a').forEach(lien => {
    lien.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });// Gestion du formulaire de contact
document.getElementById('formulaire').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Afficher un message de confirmation
    alert('Message envoyé avec succès ! 🎉');
    
    // Réinitialiser le formulaire
    this.reset();
});

// Bouton retour en haut
co
});

// Navigation fluide entre les sections
document.querySelectorAll('a[href^="#"]').forEach(lien => {
    lien.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

