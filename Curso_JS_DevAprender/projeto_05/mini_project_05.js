export function parOuImpar(limite){
    if (typeof limite !== "number"){ //Poderia ser feito tbm com a func typeof
        return "Não é um valor valido!";
    }
    for (let index = 0; index <= limite; index++){
        if (index % 2 === 0){
            console.log("Par: " + index);
            console.log("------");
        }
        else {
            console.log("Impar: " + index);
            console.log("------");
        }
    }   
}   
