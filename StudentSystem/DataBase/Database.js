const mysql = require('mysql2/promise');

class DataBase {
    static connection = null;

    static async getConnection() {
        if (!this.connection) {
            try {
                this.connection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'root', 
                    password: '', 
                    database: 'school'
                });
                console.log("Successfully connected to the 'school' database!");
            } catch (err) {
                console.log("Database connection failed!");
                throw err;
            }
        }
        return this.connection;
    }
}


module.exports = DataBase;