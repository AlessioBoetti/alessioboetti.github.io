/**
 * Data Scientist Portfolio - JavaScript
 * Minimal vanilla JavaScript for smooth interactions
 */

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scroll behavior to all anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default if it's a valid ID (not just "#")
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===================================
    // Update Copyright Year
    // ===================================
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        if (currentYear > 2024) {
            currentYearSpan.textContent = ` - ${currentYear}`;
        }
    }

    // ===================================
    // Intersection Observer for Fade-In Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards for fade-in animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Observe skill pills for staggered fade-in
    const skillPills = document.querySelectorAll('.skill-pill');
    skillPills.forEach((pill, index) => {
        pill.style.animationDelay = `${index * 0.05}s`;
        observer.observe(pill);
    });

    // ===================================
    // Image Loading - Add placeholder SVG if image fails
    // ===================================
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach(img => {
        // If image doesn't exist, replace with a placeholder SVG
        img.addEventListener('error', function() {
            const placeholder = createPlaceholderSVG();
            this.parentElement.innerHTML = placeholder;
        });
    });

    // ===================================
    // Helper: Create Placeholder SVG
    // ===================================
    function createPlaceholderSVG() {
        return `
            <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#fafafa"/>
                <g transform="translate(150, 100)">
                    <circle cx="50" cy="40" r="30" fill="#e5e5e5"/>
                    <path d="M20 100 L80 100 L80 140 L20 140 Z" fill="#e5e5e5"/>
                    <path d="M30 140 L40 160 L60 160 L70 140" fill="#e5e5e5"/>
                    <text x="50" y="200" font-family="Inter, sans-serif" font-size="14" fill="#999" text-anchor="middle">
                        Project Screenshot
                    </text>
                </g>
            </svg>
        `;
    }

    // ===================================
    // Add fade-in class to CSS (dynamically)
    // ===================================
    const style = document.createElement('style');
    style.textContent = `
        .project-card,
        .skill-pill {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .project-card.fade-in,
        .skill-pill.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Console Message (Easter Egg)
    // ===================================
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2d2d2d;');
    console.log('%cLooks like you\'re curious about the code. Feel free to check out the repository!', 'font-size: 14px; color: #666;');
    
});