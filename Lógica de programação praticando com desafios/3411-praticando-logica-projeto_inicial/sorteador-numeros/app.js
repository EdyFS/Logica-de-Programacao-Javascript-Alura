/*let quantidade = document.getElementById('quantidade').value;
let de = document.getElementById('de').value;
let ate = document.getElementById('ate').value;
let resposta = [];*/

function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    let resposta = [];
    for(let i = 0; i < quantidade; i++){
        let numero = parseInt(Math.random() * (ate - de)+ de);
        console.log(numero);
        resposta.push(numero);
    }
    //let texto = `Números sorteados: ${resposta = [i]}`;
    document.getElementById('resultado').innerHTML = `Números sorteados: ${resposta}`;
    console.log(resposta);
    //console.log(texto);
}

function reiniciar(){
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    de = document.getElementById('de');
    de.value = '';
    ate = document.getElementById('ate');
    ate.value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
}
