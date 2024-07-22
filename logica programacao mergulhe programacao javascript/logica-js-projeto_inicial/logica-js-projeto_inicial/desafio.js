alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
let nome = prompt("Escreva o nome do usuário: ");
let idade = prompt("Digite sua idade: ");
if (idade >= 18){
    alert("Pode tirar a habilitação!");
}

//Aula 2
let dia = prompt("Escreva o dia: ");
if (dia == "Sábado" || dia == "Domingo"){
    alert("Bom fim de semana!");
}
else{
    alert("Boa semana!");
}

let numero = prompt("Escreva um número: ");
if (numero >= 0){
    alert("Positivo");
}
else{
    alert("Negativo");
}

let pontuacao = 100;
if (pontuacao >= 100){
    console.log("Parabéns, você venceu!");
}
else{
    console.log("Tente novamente para ganhar.");
}

let saldo = 1000;
console.log(`O saldo é R$ ${saldo}`);

let nome = prompt("Escreva o nome: ");
alert(`Bem-vindo, ${nome}`);

//Aula 3
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}

let contador = 10;
while (contador >= 0){
    console.log(contador);
    contador--;
}

let numero = prompt('Escreva um número:');
while (numero >= 0){
    console.log(numero);
    numero--;
}

let numero = prompt('Escreva um número:');
let contador = 0;
while (numero >= contador){
    console.log(contador);
    contador++;
}

//Aula 4

console.log('Boas vindas!');

let nome = prompt('Escreva o nome');
console.log(`Olá, ${nome}!`);

let nome = prompt('Escreva o seu nome: ');
alert(`Olá, ${nome}!`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt('Insira sua idade: ');
if (idade >= 18){
    console.log('Maior');
}
else{
    console.log('Menor');
}

let numero = prompt('Insira um número: ');
if (numero > 0){
    console.log('Positivo');
}
else if(numero < 0){
    console.log('Negativo');
}
else{
    console.log('Zero');
}

let numero = 1;
while (numero <= 10){
    console.log(numero);
    numero++;
}

let nota = 8.5;
if (nota >= 7){
    console.log('Aprovado');
}
else{
    console.log('Reprovado');
}

let numeroaleatorio = Math.random();
console.log(numeroaleatorio);

let numeroInteiro = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiro);

let numeroInteiro = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiro);