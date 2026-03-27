const Database = require('./Database.js');

async function testConnection() {
    try {
        const db = await Database.getConnection();
        const [rows] = await db.execute('SELECT 1 + 1 AS result');
        console.log("Success! Test Query Result:", rows[0].result); 
    } catch (error) {
        console.error("Test failed. Error details:");
        console.error(error.message); // THIS LINE IS KEY
    }
}

testConnection();