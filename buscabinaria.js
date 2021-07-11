// -
//busca binária ela é mais eficiente __> pré requisito, valores ordenados! crescente ou descrescente
// pego a posição central
// se o valor for menor que eu encontrei eu subo ou eu desco os apontadores
//ORDEM LOGARITIMICA 

//Busca binária ------------------
//ordenando os valores vamos la 
var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];


function buscaBinaria(num){
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while(inicio <= fim){       

        meio = parseInt((inicio+fim)/2);
        passos = passos+1;

        if(num == valores[meio]){
            console.log("Achei em " + passos + " passos");
            return meio;         
        }else{
            if(num > valores[meio]){
                inicio = inicio + 1; 
            }
            else{
                fim = meio - 1;
            }
        }

        
    }
    console.log("Não achei em "+ passos + " passos");
    return -1;
}



console.log(buscaBinaria(10));
console.log()
console.log(buscaBinaria(60));
// log de 10 na base 2 3,9080 4 passos
console.log(buscaBinaria(48));



