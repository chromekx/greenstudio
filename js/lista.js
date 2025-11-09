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

const container = document.querySelector('.carousel-container');
const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const games = Array.from(document.querySelectorAll('.game'));

let position = 0; // deslocamento em px

function getGap() {
    const style = window.getComputedStyle(track);
    return parseFloat(style.gap) || 0;
}

function getCardWidth() {
    if (!games.length) return 0;
    return games[0].getBoundingClientRect().width + getGap();
}

function getMaxScroll() {
    return track.scrollWidth - container.clientWidth;
}

function updateControls(position, maxScroll) {
    if (position <= 0) {
        // início → só a seta da direita
        prev.style.display = "none";
        next.style.display = "block";
        document.querySelector('.controls').style.justifyContent = "flex-end";
    } else if (position >= maxScroll - 2) {
        // fim → só a seta da esquerda
        prev.style.display = "block";
        next.style.display = "none";
        document.querySelector('.controls').style.justifyContent = "flex-start";
    } else {
        // meio → as duas setas
        prev.style.display = "block";
        next.style.display = "block";
        document.querySelector('.controls').style.justifyContent = "space-between";
    }
}

function moveCarousel(step) {
    const cardWidth = getCardWidth();
    if (!cardWidth) return;
    position += step * cardWidth;
    const maxScroll = getMaxScroll();

    if (position < 0) position = 0;
    if (position > maxScroll) position = maxScroll;

    track.style.transform = `translateX(-${position}px)`;

    updateControls(position, maxScroll);
}

function updateCarousel() {
    const maxScroll = getMaxScroll();
    if (position > maxScroll) position = maxScroll;
    track.style.transform = `translateX(-${position}px)`;

    updateControls(position, maxScroll);
}

prev.addEventListener('click', () => moveCarousel(-1));
next.addEventListener('click', () => moveCarousel(1));

window.addEventListener('resize', () => {
    requestAnimationFrame(updateCarousel);
});

window.addEventListener('load', () => {
    updateCarousel();
    setTimeout(updateCarousel, 150);
});

// redirecionamentos
document.querySelector('#cubo').onclick = () => window.location.href = 'cubo.html';
document.querySelector('#damas').onclick = () => window.location.href = 'damas.html';
document.querySelector('#velha').onclick = () => window.location.href = 'jogodavelha.html';
document.querySelector('#forca').onclick = () => window.location.href = 'forca.html';
document.querySelector('#tetris').onclick = () => window.location.href = 'tetris.html';
document.querySelector('#xadrez').onclick = () => window.location.href = 'xadrez.html';