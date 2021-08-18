
const dataBase = require("./config.js")

const initDb ={
    async init(){
        const db =  await dataBase();
        
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`);
        
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT,
            sala INT
            )`);
       
        await db.close()
    }
}


initDb.init();