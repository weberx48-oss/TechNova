// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thanks for contacting us! We'll be in touch soon.";
    this.reset();
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
