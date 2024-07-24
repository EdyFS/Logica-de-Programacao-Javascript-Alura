function exibirMensagem(){
    console.log('Olá, mundo!');
}

function exibirNome(nome){
    let nome = document.querySelector(input);
    console.log(`Olá, ${nome}!`);
}

function calcularDobro(numero){
    let numero = document.querySelector(input).value;
    return numero * 2;
}

function calcularMedia(numero1, numero2, numero3){
    let numero1 = document.querySelector(input).value;
    let numero2 = document.querySelector(input).value;
    let numero3 = document.querySelector(input).value;
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}

function retornaMaior(numero1, numero2){
    let numero1 = document.querySelector(input).value;
    let numero2 = document.querySelector(input).value;
    //return numero1 > numero2? numero1 : numero2;
    if (numero1 > numero2){
        return numero1;
    }
    else{
        return numero2;
    }
}

function exibirQuadrado(numero){
    let numero = document.querySelector(input).value;
   return numero * numero;
   //return numero**2;
}