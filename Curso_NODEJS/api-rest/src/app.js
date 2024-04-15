import express from 'express' // importando o express atravez do require para o projeto
const app = express() // cria a instancia do express no projeto. iniciando o novo app.

// data mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: "G"},
    {id: 2, selecao: "Suiça", grupo: "G"},
    {id: 3, selecao: "Sérvia", grupo: "G"},
    {id: 4, selecao: "Cmarões", grupo: "G"},
]

// criar rota raiz.
app.get('/', (req, resp) => {
    resp.send("Hello World!")
})

app.get("/selecoes", (req, resp) => {
    resp.status(200).send(selecoes)
})


export default app
