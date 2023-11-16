// Aparentemente os imports no js são bem chatos.
// EU so consegui subindo um servidor para rodar a page html
// Não é possivel apenas abrindo o arquivo html que esta na maquina
// também é preciso anotar no html que eu estava testando o valor
// type=module
// ex.: <script src="./script_teste.js" type="module"></script>
// Depois disso tudo que foi possivel usar uma função importada
// no script.


// Os valores para serem importados precisam ter a palavra Export
// Os definindo, ex.:

// Exportando um variavel
// export let teste_1;

// Exportando uma func
// export function retornaOMaiorDosValores(valor1, valor2){
//     if (valor1 > valor2){
//         console.log("O maior valor foi: ", valor1)
//         return valor1;
//     }
//     console.log("O maior valor foi: ", valor2)
//     return valor2;
// }