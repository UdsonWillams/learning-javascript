import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "db_node_js_initial"
})
connection.connect()

/**
 * Executa um código sql com ou sem queryValues
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} queryValues  a serem passados como valor nas querys
 * @param {string} rejectMessage mensageme exibida em caso de erro.
 * @returns Um objeto Promisse.
 */
export const consult = (sql, queryValues='', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, queryValues, (error, result) => {
            if (error) return reject(rejectMessage)
            const response = JSON.parse(JSON.stringify(result))
            return resolve(response)
        })
    })
}

export default connection
