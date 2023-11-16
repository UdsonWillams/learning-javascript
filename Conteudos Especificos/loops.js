// Loops em js

// Existem 5 loops no js
// 1. For
// 2. While
// 3. Do .. While
// 4. For .. In
// 5. For .. Of

// 1 - For
for (let i = 0; i < 5; i++){ // Codigo basico de verificar n° impares.
    if (i % 2 !== 0){
        console.log(i)
    }
}

// 2 - While
let i = 5;
while (i >= 1){
    if (i % 2 == 0){
        console.log(i)
    }
    i--; //decremento da variavel i
}

// 3 - Do While - SImilar ao while, mas ele roda primeiro antes de ver a condição do while.
// Tendo a condição de parada ele para. mas pelo menos 1 vez.
let doWhile = 0;
do {
    console.log("valor: ", doWhile);
    doWhile++;
} while(doWhile < 10)

// 4 - For In
// Acredito que seja algo parecido com um for each.

const pessoa = {
    nome: "Udson",
    idade: 27
}

for (let key in pessoa){
    if (key.nome === "Udson"){
        console.log("Olá Udson!");        
    }
    else{
        console.log("Olá!!!")
    }
}

const cores = ["Vermelho", "Azul", "Verde"]
for (let indice in cores){
    console.log(indice, cores[indice])
    // Dessa forma aparece o indice do array
    // E as cores contidas naquele indice passado.
}

// 5 - For Of
// inves de ver o indice, ja vai direto no atributo do indice.

for (let cor of cores){
    console.log(cor);
    // Isso mostraria o valor das cores do Array cores
    // Em sequencia
}
