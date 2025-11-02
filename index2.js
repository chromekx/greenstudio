let darkBtn = document.querySelector('.dark-btn');
let items = document.querySelectorAll('.item');
let containers = document.querySelectorAll('.container');

function darkTheme() {
    console.log('O botão de modo escuro foi pressionado.');
    items.forEach(link => link.classList.toggle('dark-mode'));
    containers.forEach(c => c.classList.toggle('dark-mode'));
    darkBtn.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
};