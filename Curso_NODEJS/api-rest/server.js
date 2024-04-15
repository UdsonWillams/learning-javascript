import app from './src/app.js'
import connection from './infra/conexion.js'

const PORT = 3000 // porta do servidor local.

// make connection
connection.connect((error) =>{
    if (error){
        console.log(error)
    } else {
        console.log("conexão com banco realizada!")
        app.listen(PORT, () => {
            console.log(`Servidor rodando: http://localhost:${PORT}`)
        })
    }
})
