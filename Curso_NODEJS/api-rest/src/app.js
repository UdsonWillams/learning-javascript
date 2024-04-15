import express from 'express' // importando o express atravez do require para o projeto
const app = express() // cria a instancia do express no projeto. iniciando o novo app.

// Indicar para o express ler o body passado com json
app.use(express.json())

// data mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: "G"},
    {id: 2, selecao: "Suiça", grupo: "G"},
    {id: 3, selecao: "Sérvia", grupo: "G"},
    {id: 4, selecao: "Camarões", grupo: "G"}
]

function searchCountryById(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function searchCountryIndex(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota raiz.
app.get('/', (req, resp) => {
    resp.send("Hello World!")
})

app.get("/selecoes", (req, resp) => {
    resp.status(200).send(selecoes)
})

app.get("/selecoes/:id", (req, resp) => {
    resp.json(searchCountryById(req.params.id))
})

app.post('/selecoes', (res, resp) => {
    selecoes.push(res.body)
    resp.status(201).send({status: "success"})
})

app.delete("/selecoes/:id", (req, resp) => {
    let index = searchCountryIndex(req.params.id)
    // splice apaga o valor do index e mais quantos 
    // valores nos queremos apagar a partir daquele index.
    selecoes.splice(index, 2)
    resp.status(200).json({status: "success"})
})

app.put("/selecoes/:id", (req, resp) => {
    let index = searchCountryIndex(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    resp.status(200).json(selecoes)
})

export default app
