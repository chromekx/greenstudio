var botaoTema = document.querySelector('.tema');
var header = document.querySelectorAll('.menu a');
var container = document.querySelectorAll('container');

botaoTema.addEventListener('click', function() {
    header.style.backgroundColor = "#000";
    header.style.color = "#fff";
    container.style.backgroundColor = "#000";
    container.style.color="#fff";
});