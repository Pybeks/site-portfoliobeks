const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a'); // SÉLECTIONNE LES LIENS

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation des liens
        document.querySelectorAll('.nav-links li').forEach((link, index) => { // NOTE: on itère sur les <li>
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation du burger
        burger.classList.toggle('toggle');
    });

    // Fermer le menu après avoir cliqué sur un lien mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            // animation pour le prochain clic
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.style.animation = '';
            });
        });
    });
}

navSlide();
