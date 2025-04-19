// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('YOUR_USER_ID'); // 🔁 Replace this with your actual EmailJS User ID

    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Send the form using EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('✅ Thank you! Your message has been sent successfully.');
                document.getElementById('contact-form').reset();
            }, function (error) {
                console.error('FAILED...', error);
                alert('❌ Something went wrong. Please try again later.');
            });
    });
});

