const darkBtn = document.querySelector('.dark-btn');
const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const containersText = document.querySelectorAll('.container p');
const menuBtn = document.querySelector('.icon');
const menu = document.querySelector('.items');
const title = document.querySelector('.title');
const saibaMais = document.querySelector('.saiba-mais');
const slider = document.querySelector('.slider')

function darkTheme() {
    console.log('O botão de modo escuro foi pressionado.');
    darkBtn.classList.toggle('dark-mode');
    items.forEach(item => item.classList.toggle('dark-mode'));
    containers.forEach(container => container.classList.toggle('dark-mode'));
    containersText.forEach(textP => textP.classList.toggle('dark-mode'));
    menuBtn.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.title').forEach(text => text.classList.toggle('dark-mode'));
    title.classList.toggle('dark-mode');
    saibaMais.classList.toggle('dark-mode');
    slider.classList.toggle('dark-mode');
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
};