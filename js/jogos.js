const darkBtn = document.querySelector('.dark-btn');
const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const containersText = document.querySelectorAll('.container p');
const menuBtn = document.querySelector('.icon');
const menu = document.querySelector('.items');
const ods = document.querySelectorAll('.ods');

function darkTheme() {
    console.log('O botão de modo escuro foi pressionado.');
    darkBtn.classList.toggle('dark-mode');
    items.forEach(item => item.classList.toggle('dark-mode'));
    containers.forEach(container => container.classList.toggle('dark-mode'));
    containersText.forEach(textP => textP.classList.toggle('dark-mode'));
    menuBtn.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.title').forEach(text => text.classList.toggle('dark-mode'));
    document.querySelectorAll('.integrante img').forEach(symbol => symbol.classList.toggle('dark-mode'));
    document.querySelectorAll('.integrante p').forEach(symbol => symbol.classList.toggle('dark-mode'));
    ods.forEach(ods => ods.classList.toggle('dark-mode'));
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
};