/**
 * Gère le toggle clair/sombre et la persistance via localStorage.
 */
export function initialiserTheme() {
    const body = document.body;
    const boutonTheme = document.getElementById('themeToggle');
    const labelTheme = document.getElementById('themeLabel');
    const themeSauve = localStorage.getItem('portfolio-theme');

    const appliquerTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        if (labelTheme) {
            labelTheme.textContent = theme === 'light' ? 'Clair' : 'Sombre';
        }
    };

    appliquerTheme(themeSauve || 'dark');

    if (!boutonTheme) return;

    boutonTheme.addEventListener('click', () => {
        const nouveauTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        appliquerTheme(nouveauTheme);
        localStorage.setItem('portfolio-theme', nouveauTheme);
    });
}
