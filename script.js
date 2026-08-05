document.addEventListener('DOMContentLoaded', function () {

    // Nav active link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Download Resume — handled by HTML href, no JS needed

    // Contact Me
    document.getElementById('contactMeBtn')?.addEventListener('click', function () {
        window.location.href = 'mailto:dhanuvarshini@gmail.com';
    });

});
