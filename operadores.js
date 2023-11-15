// Existem os seguintes operadores:
// Operadores aritmeticos
// Operadores de atribuição
// Operadores de comparação
// Operadores Logicos
// Operadores Bitwise

// Operadores aritmeticos
// +, -, *, /, **

let salario = 100;

let salario_1 = salario + salario;
let salario_2 = salario - salario;
let salario_3 = salario * salario;
let salario_4 = salario / salario;
let salario_5 = salario ** salario;

// ++ e --
// Formato de encremento de decremento

let salario_plusplus = ++salario
let salario_lessless = --salario
// Por curiosidade se colocarmos o sinal na frente da
// Variavel o valor só é encre/decre depois da chamada.

// Atribuição de valores.
let salario_atribuicao = salario += salario;

// Operadores de igualdade.
// Igualdade estrita
let estrita = salario === 10;
// Esssa igualdade além de verificar o valor verifica o tipo
// Caso fosse salario = "10" e o valor de verificação == 10 dará false

// Igualdade solta
let solta = salario == "10"; // não é a forma mais recomendada
// Também verifica a igualdade mas de uma forma diferente
// Da acima, essa verificação pode dar certo, pois o js
// faz uma conversão dos valores para tentar fazer a igualdade.

// **Operador ternario** 
let pontos = 100;
let tipo = pontos > 100 ? "maior que 100" : "menor que 100";
// Legal o ternario daqui do JS é um operador e não um if.

// **Operador Logico** 
// Operador E -> &&

let maiorDeIdadeE = true;
let possuiCarteiraDeTrabalhoE = true;
let podeAplicarE = maiorDeIdadeE && possuiCarteiraDeTrabalhoE;
// Retorna se é verificação é true ou false de acordo com o operador logico
// Nesse caso retorna True

// Operador OU -> ||

let maiorDeIdadeOu = true;
let PaiDeixouAplicar = false;
let podeAplicarOu = maiorDeIdadeOu && PaiDeixouAplicar;
// Retorna se é verificação é true ou false de acordo com o operador logico
// Nesse caso retorna True

// Operador NOT -> !
// O operador not no js é o !

// Candidado foi recusado? Retorna o not de pode aplicar, se la for True
// Ele não pode, se for false ele foi Recusado
let candidatoRecusado = !podeAplicarOu;
