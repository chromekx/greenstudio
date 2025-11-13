const darkBtn = document.querySelector('.dark-btn');
const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const containersText = document.querySelectorAll('.container p');
const menuBtn = document.querySelector('.icon');
const menu = document.querySelector('.items');
const title = document.querySelector('.title');

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
};

function openMenu() {
    console.log('O menu foi aberto.');
    menu.classList.toggle('open');
};

const videoJogo = document.querySelector(".videoJogo");
const miniaturas = document.querySelectorAll(".miniaturas img, .miniaturas video");

miniaturas.forEach((miniatura, index) => {
    miniatura.addEventListener("click", () => {
        miniaturas.forEach(m => m.classList.remove("active"));
        miniatura.classList.add("active");

        // Primeira miniatura mostra o vídeo, outras mostram imagens
        if (index === 0) {
            principal.innerHTML = videoHTML;
        } else {
            principal.innerHTML = `<img src="${miniatura.src}" alt="imagem">`;
        }
    });
});

// dar uma olhada nesse
const videoJogo = document.querySelector(".video-jogo");
const miniaturas = document.querySelectorAll(".miniaturas img, .miniaturas video");

if (videoJogo && miniaturas.length > 0) {
    // Salva o HTML original do vídeo principal
    const videoPrincipal = videoJogo.querySelector("video");
    const videoHTML = videoPrincipal ? videoPrincipal.outerHTML : "";

    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener("click", () => {
            miniaturas.forEach(m => m.classList.remove("active"));
            miniatura.classList.add("active");

            // Troca o conteúdo principal conforme miniatura clicada
            if (miniatura.tagName.toLowerCase() === "video") {
                videoJogo.innerHTML = miniatura.outerHTML;
            } else {
                videoJogo.innerHTML = `<img src="${miniatura.src}" alt="imagem">`;
            }
        });
    });
}