let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarBotao(){
    console.log('O botão foi clicado');
}

function acionarAlerta(){
    alert('Eu amo JS');
}

function informarCidade(){
    let cidade = prompt('Informe a cidade: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somarNumeros(){
    let numero1 = parseInt(prompt('Informe o primeiro número: '));
    let numero2 = parseInt(prompt('Informe o segundo número: '));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é ${soma} `);
}