import { retornaOMaiorDosValores } from "./Projeto_02/mini_project_02.js";
import { FizzBuzz } from "./Projeto_03/mini_project_03.js";
import { verificarVelocidade } from "./Projeto_04/mini_project_04.js";
import { parOuImpar } from "./Projeto_05/mini_project_05.js";

// VARIAVEIS.

let idade = 5;
// var idade | var é de uma versão mais antiga.
console.log(idade);
// JS segue camelCase, e é case sensitive.

var variavelTest1 = 1;
let variavelTest2 = "teste-2";
let variavelTest3 = 3.900 + "aaa"; // coisa doida!!
console.log(variavelTest1 + variavelTest2 + variavelTest3);

// const == constante, não pode ter seu valor alterado.
const VALOR_IMUTAVEL = "NÃO MUDEEEE";
console.log("VALOR DA CONSTANTE: " + VALOR_IMUTAVEL);

// TIPOS PRIMITIVOS.
// Existem 2 tipos, De referencia e de valores.

// Tipos de valores.  # Precisam de algum valor setado pra funcionar :)
let nome = "Udson Willams"; //string literal
let idade_2 = 25; // number literal, pode ser usado com ponto flutuante
let estaAprovado = true; // boolean
let sobrenome; // Tipo Undefined
let sobrenome_2 = undefined;  // Tipo Undefined tbm, não é muito usado mas pode acontecer
let corSelecionada = null; // Sem tipo, ajuda a redefinir valores.

// TIPAGEM DINAMICA.

// Variaveis não fica presas a um tipo pre-definido como em
// outras linguagens, como C, Java, etc.

// Sem  diferenciação de ponto flutuante ou numeros inteiros
// 100 é do tipo number e 10.0 é do tipo number
let num1 = 100;
let num2 = 10.0;
console.log("Tipo de num1: " + typeof(num1) + "|" + "Tipo de num2: " + typeof(num2))

// Objetos.
let pessoa = { // Objeto do tipo pessoa
    nome: "Udson",
    sobrenome: "Willams",
    idade: 27,    
};
console.log(pessoa);

//ARRAY
let array_com_varios_valores = [
    true, "teste", "estou no array", 45, 17.5
];

console.log("tamanho do array: " + array_com_varios_valores.length);
console.log("3° Elemento do array: " + array_com_varios_valores[2]);

// FUNÇÕES.
let corDoSite = "azule";
function resetaACorDoSite(corEscolhida){
    console.log("Cor do site antiga: " + corDoSite);
    corDoSite = corEscolhida;
    console.log("A nova cor escolhida foi: " + corDoSite);
}
// Bom notar que a func altera o dado de uma variavel fora
// Do escopo da func. bom tomar cuidado com o nome das
// Variaveis.

resetaACorDoSite("preto")
// Function de retorno.
function MultiplicaMeuNomePor2(nomeEnviado){
    return nomeEnviado + " | " + nomeEnviado;
}
console.log(MultiplicaMeuNomePor2("Udson"));

// Na especificação da linguagem existem regras claras para as conversões entre tipos.
// As regras às vezes podem não ser intuitivas, mas são claramente definidas.
// https://262.ecma-international.org/8.0/#sec-type-conversion

let corPersonalizada = "";
let corPadrao = "azul";
let corDoPerfil = corPersonalizada || corPadrao;
console.log("Cor escolhida foi: " + corDoPerfil + " Operação não booleana");

let a = "vermelho";
let b = "azul";
let c = a;
a = b;
b = c;
console.log(a + " | " + b)

let tituloUsuario = "comum";
let nvlPermissao; 

switch (nvlPermissao) {
    case "comum":
        nvlPermissao = 5;
        console.log(`usuario: ${nvlPermissao}| nivel: ${nvlPermissao}`);
        break;
    case "gerente":    
        nvlPermissao = 7;    
        console.log(`usuario: ${nvlPermissao}| nivel: ${nvlPermissao}`);
        break;        
    case "diretor":  
        nvlPermissao = 10;    
        console.log(`usuario: ${nvlPermissao}| nivel: ${nvlPermissao}`);
        break;        
    default:
        nvlPermissao = 5;
        console.log(`usuario: ${nvlPermissao}| nivel: ${nvlPermissao}`);
        break;
}

// Projeto 2 
console.log("retorno da função: ", retornaOMaiorDosValores(10, 20));
// Projeto 3
console.log("retorno da função: ", FizzBuzz("OLOWWW"));
console.log("retorno da função: ", FizzBuzz(9));
console.log("retorno da função: ", FizzBuzz(25));
console.log("retorno da função: ", FizzBuzz(15));
console.log("retorno da função: ", FizzBuzz(11));
// Projeto 4
console.log(verificarVelocidade(140))
// Projeto 5
parOuImpar(5)
