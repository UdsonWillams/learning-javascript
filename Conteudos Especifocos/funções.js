// Verbo + substantivo
// O professor da a dica na aula de utilizar
// um verbo mais um substantivo para nomear as funções.
// É uma forma bem interessante.

// function = palavra reservada para criação das funções.]
// Seguida de () e o abre/fecha de uma chave {}

let corDoSite = "Azul";

function resetaACorDoSite(corEscolhida){
    corDoSite = corEscolhida
    console.log("A nova cor escolhida foi: " + corDoSite)
}

// Funcs de Realizar tarefas

function DizerMeuNome(){
    console.log("Seu nome é: Udson!")
}

// Funcs de Retorno de dados.

function MultiplicaMeuNomePor2(nomeEnviado){
    return nomeEnviado + " | " + nomeEnviado;
}
