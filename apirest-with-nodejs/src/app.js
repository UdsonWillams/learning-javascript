import express from 'express'
// importando o express para o projeto
import routes from './routes.js'

// cria a instancia do express no projeto. iniciando o novo app.
const app = express()

// Indicar para o express ler o body passado com json
app.use(express.json())


app.use(routes)

export default app
