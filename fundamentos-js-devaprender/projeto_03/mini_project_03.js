export function FizzBuzz(value){
    if (isNaN(value)){ //Poderia ser feito tbm com a func typeof | exemplo no Projeto_04/mini_project_04.js
        return "Não é um numero!";
    }
    else if ((value % 3 === 0) && (value % 5 === 0)){
        return "FizzBuzz"
    }
    else if (value % 3 === 0){
        return "Fizz"
    }
    else if (value % 5 === 0){
        return "Buzz"
    }
    return value
}
