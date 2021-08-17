const dataBase = require('../db/config')


module.exports = {
    async create(req, res){
        const db = await dataBase()
        const pass = req.body.password
        let roomIdAlreadyExists = false
        let roomId= '';

        while(!roomIdAlreadyExists){
            for(let i = 0; i<6; i++){
                roomId += Math.floor(Math.random() * 10).toString()
            }

            const  roomsCreated = await db.all(`SELECT id FROM rooms`)

            if(!roomsCreated.some(roomMeet => roomMeet === parseInt(roomId))){
                roomIdAlreadyExists = true
            }
        }
      
        await db.run(`
        INSERT INTO rooms(id, pass) VALUES (${parseInt(roomId)}, ${pass}) 
        `)
       
        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}