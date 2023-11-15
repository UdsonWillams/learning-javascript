// O Js segue uma logica para comparações não booleanas
// Que são os valores Falsy e Truthy

// Falsy são os seguintes formatos:

// undefined
// null
// 0
// false
// "" / ''
// NaN - Not a Number

// Truthy são valores que não são os valores acima
// Peguei do google :) \/\/\/

// Em JavaScript, um valor truthy é um valor que se traduz
// em verdadeiro quando avaliado em um contexto Booleano. 
// Todos os valores são truthy a menos que eles sejam definidos
// como falsy (ou seja., exceto para false , 0 , "" , null , undefined , e NaN ).

// Na especificação da linguagem existem regras claras para as conversões entre tipos.
// As regras às vezes podem não ser intuitivas, mas são claramente definidas.
// https://262.ecma-international.org/8.0/#sec-type-conversion

let corPersonalizada = "";
let corPadrao = "azul";
let corDoPerfil = corPersonalizada || corPadrao;
