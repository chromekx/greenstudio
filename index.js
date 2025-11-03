let darkBtn = document.querySelector('.dark-btn');
let items = document.querySelectorAll('.item');
let containers = document.querySelectorAll('.container');
let containersText = document.querySelectorAll('.container p');
let menuBtn = document.querySelector('.icon');
let carouselControlNext = document.querySelector('.carousel-control-next');
let carouselControlPrev = document.querySelector('.carousel-control-prev');
let menu = document.querySelector('.items');

function darkTheme() {
    console.log('O botão de modo escuro foi pressionado.');
    darkBtn.classList.toggle('dark-mode');
    items.forEach(item => item.classList.toggle('dark-mode'));
    containers.forEach(container => container.classList.toggle('dark-mode'));
    containersText.forEach(textP => textP.classList.toggle('dark-mode'));
    menuBtn.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    carouselControlNext.classList.toggle('dark-mode');
    carouselControlPrev.classList.toggle('dark-mode');
    document.querySelectorAll('.symbol i').forEach(symbol => symbol.classList.toggle('dark-mode'));
    document.querySelectorAll('.symbol p').forEach(symbol => symbol.classList.toggle('dark-mode'));
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
}