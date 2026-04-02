document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));
    
    
    const orbs = document.querySelectorAll('.glow-orb');
    let maxOffset = 30; // max px movement
    
    document.addEventListener('mousemove', (e) => {
        const xRatio = e.clientX / window.innerWidth;
        const yRatio = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const modifier = index === 0 ? 1 : -1;
            const xOffset = (xRatio - 0.5) * maxOffset * modifier;
            const yOffset = (yRatio - 0.5) * maxOffset * modifier;
            
            // Appending transform instead of replacing to preserve CSS animation 
            // - CSS float animation is replaced here unfortunately, so let's stick to simple transforms combined or use margin.
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});
