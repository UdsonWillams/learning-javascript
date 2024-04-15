import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "db_node_js_initial"
})

connection.connect()

export default connection
