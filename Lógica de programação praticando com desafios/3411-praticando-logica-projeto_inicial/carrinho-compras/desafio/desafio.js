function acionar(){
    let primeiro = parseInt(document.getElementById('primeiro').value);
    let segundo = parseInt(document.getElementById('segundo').value);
    let soma = primeiro + segundo;
    let frases = document.getElementById('frases').value;
    let primeiraFrase = frases.split(';')[0];
    let segundaFrase = frases.split(';')[1];
    let texto = document.getElementById('texto');
    let numeros = document.getElementById('numeros').value;
    let primeiroNumero = numeros.split(',')[0];
    let segundoNumero =numeros.split(',')[1];

    let resultados = document.getElementById('mostrar');
    resultados.innerHTML = `O primeiro é ${primeiro}, o segundo é ${segundo}<br> A primeira frase é ${primeiraFrase}, a segunda frase é ${segundaFrase}<br> O primeiro número é ${primeiroNumero}, o segundo número é ${segundoNumero}`;
    console.log(`A soma é ${soma}`);
    texto.textContent = 'Texto digitado';
}