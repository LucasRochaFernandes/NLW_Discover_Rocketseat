const { open } = require('sqlite')
const dataBase = require('../db/config')


module.exports = {
    async create(req, res) {
        const db = await dataBase()
        const pass = req.body.password
        let roomIdAlreadyExists = false
        let roomId = '';

        while (!roomIdAlreadyExists) {
            for (let i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString()
            }

            const roomsCreated = await db.all(`SELECT id FROM rooms`)

            if (!roomsCreated.some(roomMeet => roomMeet === parseInt(roomId))) {
                roomIdAlreadyExists = true
            }
        }

        await db.run(`
        INSERT INTO rooms(id, pass) VALUES (${parseInt(roomId)}, ${pass}) 
        `)
        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const roomId = req.params.room

        const db = await dataBase()

        const questionsdb = await db.all(`select * from questions where sala = ${roomId} and read = 0`)
        const questionsdbRead = await db.all(`select * from questions where sala = ${roomId} and read = 1`)

        let isQuestions = true;

        if(questionsdb.length === 0 && questionsdbRead.length === 0){
            isQuestions = false
        }

        await db.close()
        await res.render("room", { id: roomId, questions: questionsdb, questionsRead: questionsdbRead, isQuestionsND: isQuestions})
        
    },

    async enter(req,res){
        const db = await dataBase()
        const roomId = req.body.roomId

        const verifyId = await db.get(`select id from rooms where id = ${roomId}`)

        await db.close()

        if(verifyId){
            res.redirect(`/room/${roomId}`)
        }else{
            res.redirect("/")
        }
    }
}