const { create } = require("./roomController");
const dataBase = require('../db/config') 

module.exports = {


    index(req, res){
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        console.log(`room = ${roomId} question = ${questionId}
        action = ${action} password = ${password}`)
    },
    async create(req, res){
        const db = await dataBase()

        const question = req.body.question
        const room = req.params.room
        

        await db.run(`INSERT INTO questions(titulo, read, sala) 
        values("${question}", 0, ${room})`)


        await db.close()

        res.redirect(`/room/${room}`)
    }
}