import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import './db/mongoose'
import router from './routes'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))