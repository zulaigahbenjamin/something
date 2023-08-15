import mysql from "mysql";

const db = mysql.createConnection({
    host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
    database: 'testing',
    user: 'u9j898sc5oghrbny',
    password: 'kRlXj9ltbbDgL5JVT21O'
});

export default db;

module.exports = connection;