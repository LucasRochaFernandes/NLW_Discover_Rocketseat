const express = require('express')
const route = express.Router()
const questionControl = require('./controllers/questionController.js')
const roomController = require('./controllers/roomController')

route.get('/', (req, res)=>{
    res.render("index", {page: 'enter-room'})
})

route.get('/room/:room', (req, res)=>{
    res.render("room")
})

route.get('/create-pass', (req, res)=>{
    res.render("index", {page:'create-pass'})
})

route.post('/question/:room/:question/:action', questionControl.index)

route.post('/create-room', roomController.create)

module.exports = route