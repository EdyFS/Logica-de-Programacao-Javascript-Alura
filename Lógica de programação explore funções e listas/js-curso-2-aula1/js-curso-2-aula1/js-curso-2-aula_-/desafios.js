function exibirMensagem(){
    console.log('Olá, mundo!');
}

function exibirNome(nome){
    let nome = document.querySelector('input');
    console.log(`Olá, ${nome}!`);
}

function calcularDobro(numero){
    let numero = document.querySelector('input').value;
    return numero * 2;
}

function calcularMedia(numero1, numero2, numero3){
    let numero1 = document.querySelector('input').value;
    let numero2 = document.querySelector('input').value;
    let numero3 = document.querySelector('input').value;
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}

function retornaMaior(numero1, numero2){
    let numero1 = document.querySelector('input').value;
    let numero2 = document.querySelector('input').value;
    //return numero1 > numero2? numero1 : numero2;
    if (numero1 > numero2){
        return numero1;
    }
    else{
        return numero2;
    }
}

function exibirQuadrado(numero){
    let numero = document.querySelector('input').value;
   return numero * numero;
   //return numero**2;
}

//Aula 3

function calcularIMC(altura, massa){
    let altura = document.querySelector('input').value;
    let massa = document.querySelector('input').value;
    let imc = massa / (altura**2);
    console.log(`O imc é ${imc}`);
    return imc;
}

function calcularFatorial(numero){
    let numero = document.querySelector('input').value;
    let fatorial = 1;
    let contador = 1
    while (contador <= numero){
        fatorial = fatorial * numero;
        contador++;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
    return fatorial;
}

function converterDolar(valorDolar){
    let valorDolar = document.querySelector('input'.value);
    let valorReal = valorDolar * 4.80;
    console.log(`$ ${valorDolar} é equivalente a R$ ${valorReal}`);
    return valorReal;
}

function calcularArea(altura, largura){
    let altura = document.querySelector('input').value;
    let largura = document.querySelector('input').value;
    let area = altura * largura;
    let perimetro = (2*altura)+(2*largura);
    console.log(`A área é ${area} e o perímetro é ${perimetro}`);
    return area, perimetro;
}

function calcularAreaCircular(raio){
    let raio = document.querySelector('input').value;
    let areaCircular = (3.14**2) * raio / 2;
    let perimetroCircular = 2 * 3.14 * raio;
    console.log(`A área é ${areaCircular} e o perímetro é ${perimetroCircular}`);
    return areaCircular, perimetroCircular;
}

function tabuada(numero){
    let numero = document.querySelector('input').value;
    let multiplicador = 0;
    while (multiplicador <= 10){
        let resultado = multiplicador * numero;
        console.log(multiplicador + 'x' + numero + '=' + resultado)
        return resultado;
    }

}

//Aula 4
let listaGenerica = [];

let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
//linguagensDeProgramacao.push('Javascript', 'C', 'C++', 'Kotlin', 'Python');

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

let listaDeNomes = ['Nome 1', 'Nome 2', 'Nome 3'];
console.log(listaDeNomes[0]);
console.log(listaDeNomes[1]);
console.log(listaDeNomes[2]);
