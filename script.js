document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
                this.textContent = this.textContent.replace('-', '+'); // Simple icon toggle logic if needed
            } else {
                panel.style.display = 'block';
                // this.textContent = this.textContent.replace('+', '-');
            }
        });
    });

    // Smooth Scroll for specific anchor links if needed (CSS scroll-behavior is usually enough)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-Triggered Mobile Bottom Nav (Simple & Robust)
    const bottomNav = document.querySelector('.mobile-bottom-nav');

    if (bottomNav) {
        const toggleNav = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // Lower threshold to 100px for quicker response
            if (scrollY > 100) {
                bottomNav.classList.add('is-visible');
            } else {
                bottomNav.classList.remove('is-visible');
            }
        };

        // Use passive listener for performance
        window.addEventListener('scroll', toggleNav, {
            passive: true
        });

        // Initial check
        toggleNav();
    }
});
