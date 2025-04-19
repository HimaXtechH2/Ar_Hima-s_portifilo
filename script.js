// Initialize EmailJS
emailjs.init("nHcBEConRJOWMvmU5");

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_tjbcasr', 'template_husd568', this)
        .then(function () {
            alert('✅ Message sent successfully! We’ll get back to you soon.');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('❌ Something went wrong. Please try again.');
            console.error('Error:', error);
        });
});


