// Mobile menu functionality

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuBtn.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Add backdrop
        createBackdrop();
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        body.style.overflow = '';
        
        // Remove backdrop
        removeBackdrop();
    }

    function createBackdrop() {
        // Check if backdrop already exists
        if (document.querySelector('.mobile-menu-backdrop')) return;
        
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-menu-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 4rem;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 30;
            animation: fadeIn 0.3s ease-out;
        `;
        
        backdrop.addEventListener('click', closeMobileMenu);
        document.body.appendChild(backdrop);
    }

    function removeBackdrop() {
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            backdrop.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (backdrop.parentNode) {
                    backdrop.parentNode.removeChild(backdrop);
                }
            }, 300);
        }
    }
}

// Add mobile menu styles
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .mobile-menu {
        transition: left 0.3s ease;
    }
    
    .mobile-menu-content {
        animation: slideInLeft 0.3s ease-out;
    }
    
    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .mobile-menu-content a {
        transform: translateX(-20px);
        opacity: 0;
        animation: slideInItem 0.3s ease-out forwards;
    }
    
    .mobile-menu-content a:nth-child(1) { animation-delay: 0.1s; }
    .mobile-menu-content a:nth-child(2) { animation-delay: 0.15s; }
    .mobile-menu-content a:nth-child(3) { animation-delay: 0.2s; }
    .mobile-menu-content a:nth-child(4) { animation-delay: 0.25s; }
    .mobile-menu-content a:nth-child(5) { animation-delay: 0.3s; }
    .mobile-menu-content a:nth-child(6) { animation-delay: 0.35s; }
    
    @keyframes slideInItem {
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .mobile-contact {
        animation: slideInItem 0.3s ease-out 0.4s forwards;
        transform: translateX(-20px);
        opacity: 0;
    }
    
    /* Improve mobile menu button animation */
    .mobile-menu-btn {
        transition: all 0.3s ease;
    }
    
    .mobile-menu-btn:hover {
        background-color: var(--muted);
        border-radius: var(--radius);
    }
    
    .mobile-menu-btn span {
        transform-origin: center;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
        transform: scale(0);
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(mobileMenuStyles);