document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const options = document.querySelectorAll('.option');

    welcomeMessage.classList.add('fade-in');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const url = option.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});