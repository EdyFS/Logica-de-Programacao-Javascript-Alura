let primeiro;
let segundo;
let resultado;

function numeros(){
    primeiro = parseInt(document.getElementById('Primeiro').value);
    segundo = parseInt(document.getElementById('Segundo').value);
    console.log(primeiro);
    console.log(segundo);
}

function calcular(){
    let um = parseInt(document.getElementById('um').value);
let dois = parseInt(document.getElementById('dois').value);
let calculadora = document.getElementById('calc').value;
    if (calculadora == 'adicao'){
        adicao(um, dois);
    }
    else if (calculadora == 'subtracao'){
        subtracao(um, dois);
    }
    else if (calculadora == 'multiplicacao'){
        multiplicacao(um, dois);
    }
    else if(calculadora == 'divisao'){
        divisao(um, dois);
    }
    console.log(resultado);
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = `Resposta: ${resultado}`;
}
function adicao(um, dois){
    resultado = um + dois;
    return resultado;
}

function subtracao(um, dois){
    resultado = um - dois;
    return resultado;
}

function multiplicacao(um, dois){
    resultado = um * dois;
    return resultado;
}

function divisao(um, dois){
    resultado = um/ dois;
    return resultado;
}

function paridade(){
    let numero = document.getElementById('numero').value;
    let parimpar;
    numero % 2 == 0? parimpar = 'Par': parimpar = 'Ímpar';
    let pi = document.getElementById('parimpar');
    pi.innerHTML = `O número ${numero} é ${parimpar}`;
}

function converterTemperatura(){
    let escala = document.getElementById('escala').value;
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let temperaturaConvertida = document.getElementById('temperatura-convertida');
    if (escala == 'celsius'){
        let farenheit = (temperatura * 9 / 5) + 32;
        console.log(farenheit);
        temperaturaConvertida.innerHTML = `A temperatura é ${farenheit}°F`;
    }
    else if ( escala == 'farenheit'){
        let celsius = (temperatura - 32) * 5 / 9;
        console.log(celsius);
        temperaturaConvertida.innerHTML = `A temperatura é ${celsius}°C`;
    }
    
}