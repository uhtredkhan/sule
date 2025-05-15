// Time-based greeting
function updateGreeting() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingText;

    if (hour >= 5 && hour < 12) {
        greetingText = 'Good morning!';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good afternoon!';
    } else {
        greetingText = 'Good evening!';
    }

    if (greeting) {
        greeting.textContent = greetingText;
    }
}

// Project data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce platform built with modern web technologies.',
        image: 'images/project1.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        link: '#'
    },
    {
        title: 'Task Management App',
        description: 'A productivity application for managing daily tasks and projects.',
        image: 'images/project2.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
        link: '#'
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather information display using weather API integration.',
        image: 'images/project3.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'API'],
        link: '#'
    }
];

// Load projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn primary">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Mobile navigation toggle
function setupMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    document.querySelector('.main-nav').insertBefore(hamburger, navLinks);
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    loadProjects();
    setupMobileNav();
    
    // Update greeting every minute
    setInterval(updateGreeting, 60000);
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const errors = [];

        // Email validation
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                errors.push('Please enter a valid email address');
            }
        }

        // Phone validation (if exists)
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput) {
            const phoneRegex = /^\+?[\d\s-]{10,}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                isValid = false;
                errors.push('Please enter a valid phone number');
            }
        }

        // Required fields validation
        form.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                errors.push(`${field.name} is required`);
            }
        });

        // Display errors or submit form
        const errorContainer = form.querySelector('.error-container') || 
            (() => {
                const div = document.createElement('div');
                div.className = 'error-container';
                form.insertBefore(div, form.firstChild);
                return div;
            })();

        if (!isValid) {
            errorContainer.innerHTML = `
                <ul class="error-list">
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            `;
        } else {
            errorContainer.innerHTML = '';
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        }
    });
}

// Initialize form validation for contact and survey forms
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contact-form');
    validateForm('survey-form');
}); 