let listaNomes = [];
let nome;
let lista;
let primeiro;
let segundo;
let primeirosSorteados = [];
let segundosSorteados = [];

function adicionar(){
    nome = document.getElementById('nome-amigo');
    console.log(nome.value);
    listaNomes.push(nome.value);
    console.log(listaNomes);
    lista = document.getElementById('lista-amigos');
    lista.textContent = listaNomes;
    nome.value = '';
}

function sortear(){
    primeiro = parseInt((Math.random() * (listaNomes.length)));
    segundo = parseInt((Math.random() * (listaNomes.length)));
    console.log(primeiro);
    console.log(segundo);
    console.log(listaNomes[primeiro]);
    while (primeirosSorteados.includes(primeiro)){
        primeiro = parseInt((Math.random() * (listaNomes.length)));
    }
    while (segundosSorteados.includes(segundo)){
        segundo = parseInt((Math.random() * (listaNomes.length)));
    }
    
    if (primeiro != segundo){
        primeirosSorteados.push(primeiro);
        segundosSorteados.push(segundo);
        let sorteio = document.getElementById('lista-sorteio');
        sorteio.textContent = sorteio.textContent + listaNomes[primeiro] + '→' + listaNomes[segundo] + '<br>';
    }
    else{
        //sortear();
    }
    sortear();

}

function sortearPrimeiro(){
    
}
function reiniciar(){
    nome.value = '';
    console.log(nome);
    /*for(let i = 0; i <= listaNomes.length; i++){
        listaNomes.pop(i);
    }*/
    listaNomes = [];
    lista.textContent = '';
    document.getElementById('nome-amigo').textContent = '';
    console.log(listaNomes);
    document.getElementById('lista-sorteio').textContent = '';
}

function remover(){
    listaNomes.pop();
}
/*
//Solução Alura
let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    }
    else{
        lista.textContent = lista.textContent + ',' + amigo.value;
    }
    amigo.value = '';

}

function sortear(){
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }
        else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
*/