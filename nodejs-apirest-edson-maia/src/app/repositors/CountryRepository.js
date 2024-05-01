import {consult} from "../database/connection.js"

// REGRAS DE PERSISTENCIA DE DADOS.
class CountryRepository {

    findAll() {
        const sql = "SELECT * FROM countries;"
        return consult(sql, "Error findAll")        
    }

    findById(id) {
        const sql = "SELECT * FROM countries WHERE id=?;"
        return consult(sql, id, "Error findById")
    }

    create(new_country_data) {
        const sql = "INSERT INTO countries SET ?;"
        return consult(sql, new_country_data, "Error create")
    }

    update(update_country_data, id) {
        const sql = "UPDATE countries SET ? WHERE id=?;"
        return consult(sql, [update_country_data, id], "Error update")
    }

    delete(id) {
        const sql = "DELETE FROM countries WHERE id=?;"
        return consult(sql, id, "Error update")
    }
}

// Utilizando padrão Singleton
export default new CountryRepository()
