let darkBtn = document.querySelector('.dark-btn');
let items = document.querySelectorAll('.item');
let containers = document.querySelectorAll('.container');
let menuBtn = document.querySelector('.icon');
let menu = document.querySelector('.items');
let carouselControlNext = document.querySelector('.carousel-control-next');
let carouselControlPrev = document.querySelector('.carousel-control-prev');

function darkTheme() {
    console.log('O botão de modo escuro foi pressionado.');
    items.forEach(item => item.classList.toggle('dark-mode'));
    containers.forEach(container => container.classList.toggle('dark-mode'));
    darkBtn.classList.toggle('dark-mode');
    menuBtn.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    carouselControlNext.classList.toggle('dark-mode');
    carouselControlPrev.classList.toggle('dark-mode');
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
}