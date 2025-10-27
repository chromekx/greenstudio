var botaoTema = document.querySelector('.tema');
var header = document.querySelectorAll('.menu a');
var container = document.querySelectorAll('container');

botaoTema.onclick = function() {
    header.style.backgroundColor = "#000";
    container.style.backgroundColor = "#000";
    header.style.color = "#fff";
    container.style.color="#fff";
};