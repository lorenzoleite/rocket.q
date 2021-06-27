//iniciando o banco de dados
const Database = require("./config");

const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            name TEXT,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close();
    }
}

initDb.init();