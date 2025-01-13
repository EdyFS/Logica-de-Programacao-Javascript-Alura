/*let listaNomes = [];
let nome;
let lista;
let primeiro;
let segundo;
let primeirosSorteados = [];
let segundosSorteados = [];

function adicionar() {
    nome = document.getElementById('nome-amigo');
    console.log(nome.value);
    listaNomes.push(nome.value);
    console.log(listaNomes);
    lista = document.getElementById('lista-amigos');
    lista.textContent = listaNomes;
    nome.value = '';
}

function sortear() {
    //while (primeirosSorteados.length < listaNomes.length){
    sortearPrimeiro();
    sortearSegundo();
    console.log(primeiro);
    console.log(segundo);
    if (primeiro == segundo) {
        sortear();
    }
    else {
        primeirosSorteados.push(primeiro);
        console.log(primeirosSorteados);
        segundosSorteados.push(segundo);
        console.log(segundosSorteados);
        let sorteio = document.getElementById('lista-sorteio');
        sorteio.innerHTML = sorteio.innerHTML + listaNomes[primeiro] + '→' + listaNomes[segundo] + '<br>';

        while (listaNomes.length > primeirosSorteados.length) {
            if (listaNomes.length - 1 > primeirosSorteados.length) {
                primeiro = segundo;
                sortearSegundo();
                console.log(primeiro);
                console.log(segundo);
                while (segundosSorteados.includes(segundo) || primeirosSorteados.includes(segundo)) {
                    sortearSegundo();
                }
                primeirosSorteados.push(primeiro);
                console.log(primeirosSorteados);
                segundosSorteados.push(segundo);
                console.log(segundosSorteados);
                let sorteio = document.getElementById('lista-sorteio');
                sorteio.innerHTML = sorteio.innerHTML + listaNomes[primeiro] + '→' + listaNomes[segundo] + '<br>';
            }
            else {
                primeiro = segundo;
                sortearSegundo();
                console.log(primeiro);
                console.log(segundo);
                while (segundosSorteados.includes(segundo)) {
                    sortearSegundo();
                }
                primeirosSorteados.push(primeiro);
                console.log(primeirosSorteados);
                segundosSorteados.push(segundo);
                console.log(segundosSorteados);
                let sorteio = document.getElementById('lista-sorteio');
                sorteio.innerHTML = sorteio.innerHTML + listaNomes[primeiro] + '→' + listaNomes[segundo] + '<br>';
            }
        }
    }

}

function sortearPrimeiro() {
    primeiro = parseInt((Math.random() * (listaNomes.length)));
    return primeiro;
}

function sortearSegundo() {
    segundo = parseInt((Math.random() * (listaNomes.length)));
    return segundo;
}

function reiniciar() {
    nome.value = '';
    console.log(nome);
    //for(let i = 0; i <= listaNomes.length; i++){
        //listaNomes.pop(i);
    //}
    listaNomes = [];
    lista.textContent = '';
    document.getElementById('nome-amigo').textContent = '';
    console.log(listaNomes);
    document.getElementById('lista-sorteio').textContent = '';
    primeirosSorteados = [];
    segundosSorteados = [];
}

function remover() {
    listaNomes.pop();
}*/


//Solução Alura
let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }
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
    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }
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
