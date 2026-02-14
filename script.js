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

    // Scroll-Triggered Mobile Bottom Nav (Sentinel Observer)
    const bottomNav = document.querySelector('.mobile-bottom-nav');
    // Using a sentinel (dummy element) allows precise tracking without relying on scroll events
    const trigger = document.getElementById('scroll-trigger');

    if (bottomNav && trigger) {
        // Force initial state
        bottomNav.classList.remove('is-visible');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Determine scrolling based on position
                // If trigger is NOT intersecting and is ABOVE viewport (boundingClientRect.top < 0)
                // it means we scrolled past it -> Show Nav
                // Note: We need to check if we are 'below' the trigger.

                // Simplified logic: 
                // Using 100vh absolute positioned trigger. 
                // If entry.boundingClientRect.top < 0, we are past the first screen.

                if (entry.boundingClientRect.top < 0) {
                    bottomNav.classList.add('is-visible');
                } else {
                    bottomNav.classList.remove('is-visible');
                }
            });
        }, {
            root: null,
            threshold: 0,
        });

        observer.observe(trigger);
    }
});
