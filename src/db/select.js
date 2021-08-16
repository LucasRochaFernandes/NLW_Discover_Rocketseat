const dataBase = require('./config')

async function select(){
    const db = await dataBase()

    const all = await db.get(`
    SELECT * FROM rooms;
    `);

    console.log(all)
}

select()