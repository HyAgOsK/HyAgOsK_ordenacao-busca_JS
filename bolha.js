var valoress = [10,9,8,7,6,5,4,3,2,1];

function ordena(){
    let inicio=0;
    let fim = 10;
    let tmp;
    for(vezes = 0; vezes< 10; vezes++){
        //acima são repeticoes
        //abaixo a funcionalidade Bubble sort
        for(pos=inicio; pos < fim - 1; pos++ ){
            if (valoress[pos] >valoress[pos+1]){
                tmp = valoress[pos];
             valoress[pos] = valoress[pos+1];
             valoress[pos + 1] = tmp;
    
            }
        }
    }
    
}
ordena();
console.log("vetor ordenado");
console.log("->" + valoress);
//AQUI ORDENAMOS O 1° QUE É O MAIOR, TA NA ULTIMA, PRECISO REPETIR USANDO FOR EM CIMA DO OUTRO FOR

// estrutura que insere ja bonito para buscar rápido, HASH