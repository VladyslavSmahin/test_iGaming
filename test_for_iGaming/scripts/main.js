document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('about');

    aboutButton.addEventListener('click', function() {
        const descriptionElement = document.getElementById('description');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
