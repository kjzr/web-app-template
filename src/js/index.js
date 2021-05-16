require('../sass/main.scss');

console.log('Hello from index.js');

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    const uiBody = document.body;
    const mode = uiBody.dataset.mode;

    if (mode === 'dark') {
        uiBody.classList.remove('dark-mode');
        uiBody.dataset.mode = 'light';
    } else {
        uiBody.classList.add('dark-mode');
        uiBody.dataset.mode = 'dark';
    }
});