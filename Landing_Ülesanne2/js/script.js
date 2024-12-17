document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const enElements = document.querySelectorAll('.lang-en');
    const frElements = document.querySelectorAll('.lang-fr');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            if (selectedLang === 'en') {
                enElements.forEach(el => el.style.display = '');
                frElements.forEach(el => el.style.display = 'none');
                document.documentElement.lang = 'en';
            } else {
                enElements.forEach(el => el.style.display = 'none');
                frElements.forEach(el => el.style.display = '');
                document.documentElement.lang = 'fr';
            }
        });
    });

    // Fade-in on scroll
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
