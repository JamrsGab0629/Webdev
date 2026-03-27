const mysql = require('mysql2/promise');

class Database {
    static connection = null;

    static async getConnection() {
        if (!this.connection) {
            try {
                this.connection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'root', 
                    password: '', 
                    database: 'student_system'
                });
                console.log("Connected to MySQL via Singleton.");
            } catch (err) {
                console.error("Database connection failed:", err.message);
                throw err;
            }
        }
        return this.connection;
    }
}

module.exports = Database;