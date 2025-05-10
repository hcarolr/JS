alert('Bem vindo ao jogo do numero secreto!');
//let numeroSecreto = parseInt(Math.random() * 10);
let numeroSecreto = 5;

let chute = prompt('Digite um numero entre 0 e 10');

if (chute == numeroSecreto){
    console.log('acertou:: ', chute);
} else {
    alert('Errou! :(');
}