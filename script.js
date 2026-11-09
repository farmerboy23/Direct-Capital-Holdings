/* js/script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Smooth Scrolling for Anchor Links (Submit Your Property)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply if the link is meant for the current page
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                // Scroll to target with a slight offset for the sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Form Validation & Submission Mockup
    const propertyForm = document.getElementById('property-submission-form');
    const contactForm = document.getElementById('contact-inquiry-form');
    
    const handleFormSubmit = (form, e) => {
        e.preventDefault();
        
        // Basic HTML5 validation is handled by the browser due to 'required' attributes.
        // Once passed, we mock a successful backend submission.
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const feedbackDiv = form.nextElementSibling;
        
        // Mock processing state
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        // Simulate network request
        setTimeout(() => {
            form.style.display = 'none';
            if (feedbackDiv && feedbackDiv.classList.contains('form-feedback')) {
                feedbackDiv.style.display = 'block';
            }
        }, 1200);
    };

    if (propertyForm) {
        propertyForm.addEventListener('submit', (e) => handleFormSubmit(propertyForm, e));
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(contactForm, e));
    }
});