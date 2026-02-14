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
    // Scroll-Triggered Mobile Bottom Nav (Intersection Observer)
    const bottomNav = document.querySelector('.mobile-bottom-nav');
    const heroSection = document.querySelector('.hero');

    if (bottomNav && heroSection) {
        // Force remove initially
        bottomNav.classList.remove('is-visible');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero is NOT intersecting (is out of view), show nav.
                // We use isIntersecting: false -> show nav
                if (!entry.isIntersecting) {
                    bottomNav.classList.add('is-visible');
                } else {
                    bottomNav.classList.remove('is-visible');
                }
            });
        }, {
            root: null, // viewport
            threshold: 0, // Trigger as soon as one pixel is visible/invisible
            rootMargin: "-100px 0px 0px 0px" // Offset to trigger slightly before/after
        });

        observer.observe(heroSection);
    }
});
