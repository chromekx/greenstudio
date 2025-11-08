const darkBtn = document.querySelector('.dark-btn');
const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const containersText = document.querySelectorAll('.container p');
const menuBtn = document.querySelector('.icon');
const carouselControlNext = document.querySelector('.carousel-control-next');
const carouselControlPrev = document.querySelector('.carousel-control-prev');
const menu = document.querySelector('.items');
const girarBtn = document.querySelector('.girar-roleta');
const desmarcarBtn = document.querySelector('.desmarcar-roleta');

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
    document.querySelector('.carousel').classList.toggle('dark-mode');
    girarBtn.classList.toggle('dark-mode');
    desmarcarBtn.classList.toggle('dark-mode');
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
};

// círculo central

const odsNames = [
    'Erradicação da Pobreza',
    'Fome Zero e Agricultura Sustentável',
    'Saúde e Bem-Estar',
    'Educação de Qualidade',
    'Igualdade de Gênero',
    'Água Potável e Saneamento',
    'Energia Acessível e Limpa',
    'Trabalho Decente e Crescimento Econômico',
    'Indústria, Inovação e Infraestrutura',
    'Redução das Desigualdades',
    'Cidades e Comunidades Sustentáveis',
    'Consumo e Produção Responsáveis',
    'Ação contra a Mudança do Clima',
    'Vida na Água',
    'Vida Terrestre',
    'Paz, Justiça e Instituições Eficazes',
    'Parcerias e Meios de Implementação'
];

const odsColors = [
    '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#268de2', '#FCC30B',
    '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9',
    '#56C02B', '#00689D', '#19486A'
];

const svg = document.getElementById('wheelSvg');
const cx = 250, cy = 250, rOuter = 250, rInner = 90;
svg.setAttribute('viewBox', '0 0 500 498');
const sectors = 17;

function polarToCartesian(cx, cy, r, angleDeg) {
    const a = (angleDeg - 90) * Math.PI / 180.0;
    return { x: cx + (r * Math.cos(a)), y: cy + (r * Math.sin(a)) };
}

function describeArc(cx, cy, r1, r2, startAngle, endAngle) {
    const startOuter = polarToCartesian(cx, cy, r1, endAngle);
    const endOuter = polarToCartesian(cx, cy, r1, startAngle);
    const startInner = polarToCartesian(cx, cy, r2, startAngle);
    const endInner = polarToCartesian(cx, cy, r2, endAngle);
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return ['M', startOuter.x, startOuter.y,
        'A', r1, r1, 0, largeArc, 0, endOuter.x, endOuter.y,
        'L', startInner.x, startInner.y,
        'A', r2, r2, 0, largeArc, 1, endInner.x, endInner.y, 'Z'].join(' ');
}

for (let i = 0; i < sectors; i++) {
    const start = (i * 360 / sectors);
    const end = ((i + 1) * 360 / sectors);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', describeArc(cx, cy, rOuter, rInner, start, end));
    path.setAttribute('fill', odsColors[i]);
    path.setAttribute('class', 'sector');
    path.dataset.index = i;
    path.dataset.name = odsNames[i];
    path.setAttribute('role', 'button');
    path.setAttribute('tabindex', '0');
    path.setAttribute('aria-label', `ODS ${i + 1} - ${odsNames[i]}`);
    path.addEventListener('click', () => onSegmentClick(i, odsNames[i], path));
    path.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); path.click(); } });
    svg.appendChild(path);

    // ícone SVG branco
    const midAngle = start + (end - start) / 2;
    const p = polarToCartesian(cx, cy, (rOuter + rInner) / 2, midAngle);

    // círculo de seleção (inicialmente invisível)
    const selectCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    selectCircle.setAttribute('cx', p.x);
    selectCircle.setAttribute('cy', p.y);
    selectCircle.setAttribute('r', 34); // maior que o ícone
    selectCircle.setAttribute('fill', '#fff');
    selectCircle.setAttribute('opacity', '0'); // invisível por padrão
    selectCircle.setAttribute('class', 'select-circle');
    svg.appendChild(selectCircle);

    // ícone SVG branco
    const sticker = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    sticker.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `./ods/${i + 1}.svg`);
    sticker.setAttribute('x', p.x - 25);
    sticker.setAttribute('y', p.y - 25);
    sticker.setAttribute('width', 50);
    sticker.setAttribute('height', 50);
    sticker.setAttribute('class', 'sticker');
    // Remova pointer-events:none para permitir clique
    // sticker.setAttribute('style', 'pointer-events:none;');
    // Torna o ícone clicável e dispara o clique do setor
    sticker.addEventListener('click', () => path.click());
    svg.appendChild(sticker);

    // Salve referência do círculo de seleção no path
    path.selectCircle = selectCircle;
}

// círculo central branco
const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
centerCircle.setAttribute('cx', cx);
centerCircle.setAttribute('cy', cy);
centerCircle.setAttribute('r', rInner - 2);
centerCircle.setAttribute('fill', 'white');
centerCircle.setAttribute('pointer-events', 'none');
svg.appendChild(centerCircle);

let lastSelected = null;
function onSegmentClick(index, name, pathEl) {
    if (lastSelected) lastSelected.classList.remove('selected');
    if (lastSelected === pathEl) { lastSelected = null; updateCenter(); return; }
    pathEl.classList.add('selected');
    lastSelected = pathEl;
    updateCenter(index, name);
    console.log('clicado ODS', index + 1, name);
}

function updateCenter(index, name) {
    const center = document.getElementById('centerLabel');
    const centerImgEl = document.getElementById('centerImg');
    if (index == null) {
        center.textContent = 'ODS';
        center.style.fontSize = '20px';
        if (centerImgEl) {
            centerImgEl.style.opacity = '0';
            centerImgEl.removeAttributeNS('http://www.w3.org/1999/xlink', 'href');
            centerImgEl.removeAttribute('href');
        }
    } else {
        center.textContent = `ODS ${index + 1}\n${name}`;
        center.style.whiteSpace = 'pre-line';
        center.style.fontSize = '14px';
        if (centerImgEl) {
            // Troque para SVG correspondente
            const src = `ods/${index + 1}.svg`;
            centerImgEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', src);
            centerImgEl.setAttribute('href', src);
            centerImgEl.style.opacity = '1';
        }
    }
}

document.getElementById('clearBtn').addEventListener('click', () => { if (lastSelected) lastSelected.classList.remove('selected'); lastSelected = null; updateCenter(); });
window.onSegmentClick = onSegmentClick;

const girarRoletaBtn = document.getElementById('girarRoletaBtn');

// Função para girar a roleta e selecionar uma ODS aleatória
girarRoletaBtn.addEventListener('click', () => {
    // Sorteia um setor aleatório
    const randomIndex = Math.floor(Math.random() * sectors);

    // Calcula o ângulo para girar a roleta
    const anglePerSector = 360 / sectors;
    const targetAngle = 360 - (randomIndex * anglePerSector) + anglePerSector / 2;

    // Aplica rotação animada no SVG
    svg.style.transition = 'transform 2s cubic-bezier(.7,1.7,.7,1)';
    svg.style.transform = `rotate(${targetAngle + 360 * 3}deg)`; // 3 voltas + alvo

    // Após a animação, dispara o clique no setor sorteado
    setTimeout(() => {
        svg.style.transition = '';
        svg.style.transform = `rotate(${targetAngle}deg)`;
        // Seleciona o setor
        const sectorPath = svg.querySelector(`path.sector[data-index="${randomIndex}"]`);
        if (sectorPath) sectorPath.click();
    }, 2000);
});