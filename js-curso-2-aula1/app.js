// // let titulo = document.querySelector('h1');
// // titulo.innerHTML = 'Jogo do numero secreto';

// // let paragrafo = document.querySelector('p');
// // paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  console.log('Numero secreto é ' + numeroSecreto);
}

exibirMsgInicial();

function verificarChute() {
  //   console.log('o botao foi clicado.');
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('h1', 'Errou!!');
      exibirTextoNaTela('p', 'O numero secreto é menor!');
    } else {
      exibirTextoNaTela('h1', 'Errou!!');
      exibirTextoNaTela('p', 'O numero secreto é maior!');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  exibirMsgInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMsgInicial() {
  exibirTextoNaTela('h1', 'Jogo do numero secreto');
  exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
//--------------------------------------------------DESAFIOS AULA 1
// //DESAFIO2
// let tituloDesafio = document.querySelector('h1');
// tituloDesafio.innerHTML = 'Hora do desafio!';

// //DESAFIO3
// function handleClick() {
//   console.log('O botao foi clicado no desafio.');
// }

// //DESAFIO4
// function exibirAlerta() {
//   console.log('Botao Alerta pressionado.');
//   alert('Eu amo JS');
// }

// //DESAFIO5
// function promptButtonClick() {
//   let cidade = prompt('Digite o nome de uma cidade do Brasil');
//   alert('Estive em ' + cidade + ' e lembrei de você!');
// }

// //DESAFIO6
// function somaClick() {
//   let numero1 = prompt('Digite um numero inteiro:');
//   let numero2 = prompt('Digite outro numero inteiro:');
//   let soma;
//   soma = parseInt(numero1) + parseInt(numero2);
//   alert('A soma dos dois numeros é ' + soma);
// }

//--------------------------------------------------DESAFIOS AULA 2
// //DESAFIO1
// function olaMundo() {
//   console.log('Ola mundo!');
// }
// olaMundo();

// //DESAFIO2
// function olaMundo2(nome) {
//   console.log('Ola ' + nome);
// }
// olaMundo2('Carol');

// //DESAFIO3
// let num1 = prompt('Digite um numero:');

// function dobroDe(numero) {
//   let resultado = numero * 2;
//   console.log('DESAFIO3 O dobro do primeiro numero é ' + resultado);
// }

// dobroDe(num1);

// //DESAFIO4
// let num2 = prompt('Digite outro numero:');
// let num3 = prompt('Digite mais um numero:');

// function mediaDeNumeros(num1, num2, num3) {
//   let resultado = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
//   console.log('DESAFIO4 A media dos numeros é ' + resultado);
// }

// mediaDeNumeros(num1, num2, num3);

// //DESAFIO5
// function maiorQue(num1, num2) {
//   if (num1 > num2) {
//     console.log('DESAFIO5 O primeiro numero é maior');
//   } else {
//     console.log('DESAFIO5 O segundo numero é maior');
//   }
// }

// maiorQue(num1, num2);

// //DESAFIO6
// function numQuadrado(numero) {
//   let resultado = numero * numero;
//   console.log('DESAFIO6 O segundo numero ao quadrado é ' + resultado);
// }

// numQuadrado(num2);
