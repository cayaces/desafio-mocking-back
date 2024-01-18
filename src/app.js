import express from 'express'
import productRoutes from './routes/products.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', productRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})