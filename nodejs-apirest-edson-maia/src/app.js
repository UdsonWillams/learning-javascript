import express from 'express' // importando o express atravez do require para o projeto
import CountriesController from './app/controllers/CountriesController.js'

// cria a instancia do express no projeto. iniciando o novo app.
const app = express()

// Indicar para o express ler o body passado com json
app.use(express.json())


//ROUTES
app.get("/countries", CountriesController.index)
app.get("/countries/:id", CountriesController.show)
app.post('/countries', CountriesController.store)
app.put("/countries/:id", CountriesController.update)
app.delete("/countries/:id", CountriesController.delete)

export default app
