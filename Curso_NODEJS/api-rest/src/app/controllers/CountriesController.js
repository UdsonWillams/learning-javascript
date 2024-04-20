import connection from "../database/connection"

class CountriesController {

    index(req, resp) {
        const sql = "SELECT * FROM countries;"
        connection.query(sql, (error, result) => {
            if (error){
                resp.status(404).json({"error": error})
            } else {
                resp.status(200).json(result)
            }
        })
    } // = mostra tudo
    
    show(req, resp) {
        const id = req.params.id
        const sql = "SELECT * FROM countries WHERE id=?;"
        connection.query(sql, id, (error, result) => {
            if (error){
                resp.status(404).json({"error": error})
            } else {
                resp.status(200).json(result)
            }
        })
    } // = mostra um recurso especifico
    
    store(res, resp) {
        const country_data = req.body
        const sql = "INSERT INTO countries SET ?;"
        connection.query(sql, country_data, (error, result) => {
            if (error){
                resp.status(403).json({"error": error})
            } else {
                resp.status(201).json(result)
            }
        })
    } // = salva o recurso 
    update(req, resp) {
        const id = req.params.id
        const country_data = req.body
        const sql = "UPDATE countries SET ? WHERE id=?;"
        connection.query(sql, [country_data, id], (error, result) => {
            if (error){
                resp.status(403).json({"error": error})
            } else {
                resp.status(201).json(result)
            }
        })
    } // = atualiza um recurso
    delete(req, resp) {
        const id = req.params.id
        const sql = "DELETE FROM countries WHERE id=?;"
        connection.query(sql, id, (error, result) => {
            if (error){
                resp.status(403).json({"error": error})
            } else {
                resp.status(200).json(result)
            }
        })
    } // = deleta um recurso
}

// Utilizando padrão Singleton
export default new CountriesController()
