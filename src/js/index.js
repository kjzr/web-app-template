require('../sass/main.scss');

console.log('Hello from index.js');

const uiButton = document.getElementsByTagName('button')[0];

uiButton.addEventListener('click', () => {
    const uiBody = document.body;
    const uiIcon = document.getElementById('icon');

    const mode = uiBody.dataset.mode;

    if (mode === 'dark') {
        uiBody.classList.remove('dark-mode');
        uiBody.dataset.mode = 'light';
        uiIcon.innerHTML = `<svg><use xlink:href="${require('../assets/icons/sprite.svg').default}#sun" href="${require('../assets/icons/sprite.svg').default}#sun"></use></svg>`;
        uiButton.textContent = 'Switch to dark mode';
    } else {
        uiBody.classList.add('dark-mode');
        uiBody.dataset.mode = 'dark';
        uiIcon.innerHTML = `<svg><use xlink:href="${require('../assets/icons/sprite.svg').default}#moon" href="${require('../assets/icons/sprite.svg').default}#moon"></use></svg>`;
        uiButton.textContent = 'Switch to light mode';
    }
});