const { create } = require("./roomController");
const dataBase = require('../db/config') 

module.exports = {


    async index(req, res){
        const db = await dataBase();
        const pass = req.body.password;
        const roomId = req.params.room;
        const action = req.params.action;
        const questionId = req.params.question;


       const verifyPass = await db.get(`select * from rooms where id = ${roomId}`);

        if(verifyPass.pass == pass){
            if(action == 'delete'){
                await db.run(`delete from questions where id = ${questionId}`)
            }else if(action == 'check'){
                await db.run(`update questions set read = 1 where id = ${questionId} `)
            }
            await db.close()
            res.redirect(`/room/${roomId}`)
        } else{
            await db.close()
            res.render("notPass", {room: roomId})  
        }
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