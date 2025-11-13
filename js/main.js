// Leadbunker - Main JavaScript File - Enhanced & Animated

// Mobile Menu Toggle (for future implementation)
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Leadbunker Frontend Loaded Successfully');
    
    // Animated Navbar on Scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Navbar animation
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll progress bar
        if (scrollProgress) {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (currentScroll / windowHeight) * 100;
            scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
        }
        
        lastScroll = currentScroll;
    });
    
    // Number counter animation
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            
            if (element.textContent.includes('%')) {
                element.textContent = value + '%';
            } else if (element.textContent.includes(',')) {
                element.textContent = value.toLocaleString();
            } else {
                element.textContent = value;
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    // Trigger number animations when visible
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const text = entry.target.textContent.replace(/[^0-9.]/g, '');
                const endValue = parseFloat(text);
                entry.target.dataset.animated = 'true';
                animateValue(entry.target, 0, endValue, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number, .count-up').forEach(el => {
        numberObserver.observe(el);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll with stagger effect
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, .step, .stat-card, .ai-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Add hover effect to cards
    document.querySelectorAll('.feature-card, .pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form validation helpers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                } else {
                    input.style.borderColor = '#E5E7EB';
                }
            });

            // Email validation
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (input.value && !emailRegex.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = '#EF4444';
                }
            });
        });

        // Clear error styling on input
        form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#E5E7EB';
            });
        });
    });

    // Add active state to nav links based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#4F46E5';
        }
    });

    // Cookie consent banner (optional - for future implementation)
    // Uncomment when backend is ready
    /*
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        showCookieBanner();
    }
    */
});

// Utility function for API calls (for future backend integration)
async function apiCall(endpoint, method = 'GET', data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(endpoint, options);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Crypto payment integration placeholder
function initCryptoPayment(amount, currency = 'BTC') {
    console.log(`Initiating ${currency} payment for amount: ${amount}`);
    // This will be implemented with actual crypto payment gateway
    // e.g., CoinPayments, BTCPay, or custom solution
}

// Export utility functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        apiCall,
        initCryptoPayment
    };
}

