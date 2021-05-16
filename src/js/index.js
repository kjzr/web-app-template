require('../sass/main.scss');

console.log('Hello from index.js');

const uiButton = document.getElementsByTagName('button')[0];

uiButton.addEventListener('click', () => {
    const uiBody = document.body;
    const mode = uiBody.dataset.mode;

    if (mode === 'dark') {
        uiBody.classList.remove('dark-mode');
        uiBody.dataset.mode = 'light';
        uiButton.textContent = 'Switch to dark mode';
    } else {
        uiBody.classList.add('dark-mode');
        uiBody.dataset.mode = 'dark';
        uiButton.textContent = 'Switch to light mode';
    }
});