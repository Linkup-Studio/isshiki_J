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

    // Scroll-Triggered Mobile Bottom Nav (Throttled & Dynamic)
    const bottomNav = document.querySelector('.mobile-bottom-nav');

    if (bottomNav) {
        let isTicking = false;

        const toggleNav = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const threshold = window.innerHeight * 0.3; // Show after scrolling 30% of screen height

            if (scrollY > threshold) {
                bottomNav.classList.add('is-visible');
            } else {
                bottomNav.classList.remove('is-visible');
            }
            isTicking = false;
        };

        const onScroll = () => {
            if (!isTicking) {
                window.requestAnimationFrame(toggleNav);
                isTicking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial check
        toggleNav();
    }
});
