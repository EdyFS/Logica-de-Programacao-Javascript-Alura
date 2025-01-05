let listaNomes = [];
let nome;
let lista;

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
    let primeiro = parseInt((Math.random() * (listaNomes.length)));
    let segundo = parseInt((Math.random() * (listaNomes.length)));
    console.log(primeiro);
    console.log(segundo);
    console.log(listaNomes[primeiro]);
    let rodadas = 0;
    let numerosSorteados = [];
    numerosSorteados.push(primeiro);
    while(rodadas < numerosSorteados.length){
        if(primeiro != segundo){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.textContent = sorteio.textContent + `${listaNomes[primeiro]} → ${listaNomes[segundo]}`;
    primeiro = segundo;
    console.log(primeiro);
    segundo = parseInt((Math.random() * (listaNomes.length)));
    console.log(segundo);
    numerosSorteados.push(primeiro);
        }
        else{
            segundo = parseInt((Math.random() * (listaNomes.length)));
        }
    rodadas++;
    }
        //sortear();
    
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