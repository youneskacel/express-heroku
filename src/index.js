import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const port = 10020

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.listen(port , ()=>{
    console.log('server is up on port ', port )
})