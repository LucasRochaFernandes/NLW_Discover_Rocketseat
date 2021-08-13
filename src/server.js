const express = require('express')
const app = express()
const route = require('./route')
const path = require('path')

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

app.use(route)
app.listen(8080, ()=>{console.log("Iniciado")})
