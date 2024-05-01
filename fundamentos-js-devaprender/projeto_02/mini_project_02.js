export function retornaOMaiorDosValores(valor1, valor2){
    if (valor1 > valor2){
        console.log("O maior valor foi: ", valor1)
        return valor1;
    }
    console.log("O maior valor foi: ", valor2)
    return valor2;
}

function max(num1, num2){ // Logica do js, acho que é valido com o tempo mas agr não gostei tanto hehe
    return num1 > num2 ? num1: num2;
    // Operador ternario num1 é maior que num2?
    // Se sim volta num1, senão volta num2.
}
