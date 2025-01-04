let listaNomes = [];
let nome;
let lista;

function adicionar(){
    nome = document.getElementById('nome-amigo').value;
    console.log(nome);
    listaNomes.push(nome);
    console.log(listaNomes);
    lista = document.getElementById('lista-amigos');
    lista.textContent = listaNomes;
    nome.value = 'Nome do amigo';
    nome.innerHTML = 'Nome do amigo';
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
    for(let i = 0; i <= listaNomes.length; i++){
        listaNomes.pop(i);
    }
    lista.textContent = '';
    console.log(listaNomes);
}