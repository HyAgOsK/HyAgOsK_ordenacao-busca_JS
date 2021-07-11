
var   topo=-1;
const max = 10;
var elementos = [];
function push (num){
    if (topo < max){
        topo++;
        elementos[topo]= num;


    }
    else{
        console.log("Pilha cheia");
    }
}
function Pilhavazia(){
        return topo == -1;
}

function pop(num){
    if(topo != -1){
        let num = elementos[topo];
        topo--;
        return num;


    }
    else{
        console.log("Pilha vazia");
    }
}


// desta maneira vemos agora comoo converter decimal para binario
/*
    10 / 2
0    5 / 2
  1    2/ 2
    0     1 / 2
      1     0
      */

var numerodecimal = 10;
var resto;

console.log("Hora de empilhar");

while(numerodecimal != 0 ){
    //resto da divisao por 2
    //parseInt forcamos para que permaneca um número inteiro
    resto = parseInt(numerodecimal%2);
    push(resto);
    console.log(resto);
    numerodecimal = parseInt(numerodecimal/2);

}

console.log("desempilhando tudo ....->")
// operacao not enquanto minha pilha nao esta vazia 
while(!Pilhavazia()){
    console.log(pop());

}

// fila e pilha ___> modelo de vetor
// e tamanhos limitados capacidade MAX
// GENERICAMENE TRATAMOS **FILAS PILHAS** COMO --> conjuntos QUE PODEMOS IMPLEMENTAR ATRAVÉZ DE LISTAS 
// LISTAS SAO CONCEITOS --> VALORES QUE ARMAZENAMOS CONJUNTO E ELE TEM TAMANHO ( infinito  e não mais 
// valor MAX ) --> ok!
// PILHA FILA E LISTA -> CONJUNTOS -> E CONJUNTOS TEM CRITÉRIOS PARA COLOCAR ELEMENTOS NA ORDEM QUE QUERO

// hash --> é acessar um elento em um único passos muito rápido! 

// Arvore --> hirerárquica 
// nó raiz      (   A   )
//        B(menor)      C(maior)

//  D(menor) E(maior)  F(menor)  G(maior)    

//níveis hierárquicos para que armazena e busca de maneira eficiênte
