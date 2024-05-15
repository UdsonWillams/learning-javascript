import app from './app.js'

const PORT = process.env.PORT || 3000 // porta do servidor local.

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`)
})
