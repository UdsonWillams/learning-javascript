import express from 'express' // importando o express atravez do require para o projeto
import connection from '../infra/connection.js'

// cria a instancia do express no projeto. iniciando o novo app.
const app = express()

// Indicar para o express ler o body passado com json
app.use(express.json())


//ROUTES
app.get("/countries", (req, resp) => {
    const sql = "SELECT * FROM countries;"
    connection.query(sql, (error, result) => {
        if (error){
            resp.status(404).json({"error": error})
        } else {
            resp.status(200).json(result)
        }
    })
})

app.get("/countries/:id", (req, resp) => {
    const id = req.params.id
    const sql = "SELECT * FROM countries WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        if (error){
            resp.status(404).json({"error": error})
        } else {
            resp.status(200).json(result)
        }
    })
})

app.post('/countries', (res, resp) => {
    const country_data = req.body
    const sql = "INSERT INTO countries SET ?;"
    connection.query(sql, country_data, (error, result) => {
        if (error){
            resp.status(400).json({"error": error})
        } else {
            resp.status(201).json(result)
        }
    })
})

app.delete("/countries/:id", (req, resp) => {
    const id = req.params.id
    const sql = "DELETE FROM countries WHERE id=?;"
    connection.query(sql, id, (error, result) => {
        if (error){
            resp.status(404).json({"error": error})
        } else {
            resp.status(200).json(result)
        }
    })
})

app.put("/countries/:id", (req, resp) => {
    const id = req.params.id
    const country_data = req.body
    const sql = "UPDATE countries SET ? WHERE id=?;"
    connection.query(sql, [country_data, id], (error, result) => {
        if (error){
            resp.status(400).json({"error": error})
        } else {
            resp.status(201).json(result)
        }
    })
})

export default app
