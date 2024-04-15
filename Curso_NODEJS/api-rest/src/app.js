const express = require('express') // importando o express atravez do require para o projeto
const app = express() // cria a instancia do express no projeto. iniciando o novo app.
const port = 3000 // porta do servidor local.

// criar rota raiz.

app.get('/', (req, resp) => {
    resp.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Servidor rodando: localhost:${port}`)
})
