import app from './app.js'

const PORT = 3000 // porta do servidor local.

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`)
})
