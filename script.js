const botao = document.querySelector('.blue');
const botao2 = document.querySelector('.red');
const cor = document.querySelector('#div');

cor.classList.add('azul');

// function sla(){
//     cor.classList.remove('vermelho');
//     cor.classList.add('azul');
// }
// function sla2(){
//     cor.classList.remove('azul');
//     cor.classList.add('vermelho');
// }

botao.addEventListener('click', () => {
    cor.classList.remove('vermelho');
    cor.classList.add('azul');
});
botao2.addEventListener('click', () => {
    cor.classList.remove('azul');
    cor.classList.add('vermelho');
});