const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./cornerstone.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            employee_name TEXT,
            email TEXT,
            department TEXT,
            position TEXT,
            salary REAL,
            country TEXT
        )
    `);

});

module.exports = db;