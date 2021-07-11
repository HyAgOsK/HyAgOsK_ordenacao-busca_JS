//busca sequencial UM POR UM ------------------
var valores = [5, 8, 10, 22, 45, 38]
//ORDEM QUADRATICA OU RETA LINEAR
function busca(num){
    for(i=0; i < 6; i++){
        if(num == valores[i]){
            return i;
        }

    }
    return -1;
}

console.log(busca(10));
console.log(busca(50));
