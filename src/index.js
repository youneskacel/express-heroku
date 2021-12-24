import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const port = 10020

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDirectory = path.join(__dirname,'../public')
console.log(publicDirectory)
app.use(express.static(publicDirectory)).listen(10020 , ()=>{ 
    console.log('server is up on port ', port )
})