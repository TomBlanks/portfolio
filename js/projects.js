// Projects page functionality
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.controls .btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Filter functionality for project buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('selected');
                btn.setAttribute('aria-pressed', 'false');
            });
            
            // Add selected class to clicked button
            this.classList.add('selected');
            this.setAttribute('aria-pressed', 'true');
            
            // Get filter type
            const filterType = this.textContent.trim();
            
            // Filter projects based on selection
            filterProjects(filterType);
        });
    });
    
    // Keyboard navigation for project cards
    const projectsGrid = document.querySelector('.featured-projects-grid');
    if (projectsGrid) {
        projectsGrid.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const focusedCard = document.activeElement;
                if (focusedCard.classList.contains('featured-project-card')) {
                    e.preventDefault();
                    // Here you could add navigation to project detail page
                    console.log('Navigate to project:', focusedCard.getAttribute('aria-label'));
                }
            }
        });
    }
    
    function filterProjects(filterType) {
        // This is where you would implement actual filtering logic
        // For now, we'll just log the filter type
        console.log('Filtering by:', filterType);
        
        // Example implementation:
        // if (filterType === 'All Work') {
        //     // Show all projects
        // } else if (filterType === '<>') {
        //     // Show only code projects
        // } else if (filterType === '[]') {
        //     // Show only 3D projects
        // }
    }
    
    // Add focus management for better accessibility
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    
    // Skip link functionality (if added)
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
    
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Performance optimization: Lazy loading for images (if needed)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}