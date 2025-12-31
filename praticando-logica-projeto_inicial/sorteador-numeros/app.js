const resultado = document.getElementById('resultado');

function sortear() {
  let qtdNumeros = parseInt(document.getElementById('quantidade').value);
  let menorNumero = parseInt(document.getElementById('de').value);
  let maiorNumero = parseInt(document.getElementById('ate').value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < qtdNumeros; i++) {
    numero = gerarNumeroAleatorio(menorNumero, maiorNumero);
    while (sorteados.includes(numero)) {
      numero = gerarNumeroAleatorio(menorNumero, maiorNumero);
    }
    sorteados.push(numero);
  }

  resultado.innerHTML = `<label class="texto__paragrafo"
              >Números sorteados: ${sorteados}</label
            >`;
  alteraStatusBotao();
}

function reiniciar() {
  let qtdNumeros = document.querySelector('#quantidade');
  let menorNumero = document.querySelector('#de');
  let maiorNumero = document.querySelector('#ate');

  qtdNumeros.value = '';
  menorNumero.value = '';
  maiorNumero.value = '';
  resultado.innerHTML = `<label class="texto__paragrafo"
              >Números sorteados: nenhum até agora</label
            >`;
  alteraStatusBotao();
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function alteraStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}
