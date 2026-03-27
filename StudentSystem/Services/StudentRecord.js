const Database = require("../DataBase/Database.js"); 
const User = require("../Strategy/User.js");
const Address = require("../Strategy/Address.js");
const Grades = require("../Strategy/Grades.js");

class StudentRecord {
  #TotalStudents = 0;

  
  async initialize() {
    const conn = await Database.getConnection();
    
   
    const query = `
      SELECT s.*, a.*, g.* FROM student s
      JOIN address a ON s.id = a.student_id
      JOIN grades g ON s.id = g.student_id
    `;

    const [rows] = await conn.execute(query);
    this.#TotalStudents = rows.length;
    return rows;
  }
  
  
  async AddStudent(studentDto, addressDto, gradesDto) {
    const conn = await Database.getConnection();

    try {
      await conn.beginTransaction();

     
      const [studRes] = await conn.execute(
        "INSERT INTO student (firstname, lastname, middlename, birthdate, nationality) VALUES (?, ?, ?, ?, ?)",
        [studentDto.Firstname, studentDto.Lastname, studentDto.Middlename, studentDto.Birthdate, studentDto.Nationality]
      );
      const newId = studRes.insertId;

     
      await conn.execute(
        "INSERT INTO address (student_id, country, municipality, city, brgy) VALUES (?, ?, ?, ?, ?)",
        [newId, addressDto.Country, addressDto.Municipality, addressDto.City, addressDto.Brgy]
      );

    
      await conn.execute(
        "INSERT INTO grades (student_id, prelim, midterm, prefinal, final) VALUES (?, ?, ?, ?, ?)",
        [newId, gradesDto.Prelim, gradesDto.Midterm, gradesDto.Prefinal, gradesDto.Final]
      );

      await conn.commit();
      console.log(" Student successfully saved to Database!");
    } catch (error) {
      await conn.rollback();
      throw new Error(" Failed to save student: " + error.message);
    }
    
  }

  
  async StudentSearch(lastname) {
    const conn = await Database.getConnection();
    const query = "SELECT * FROM student WHERE lastname = ?";
    const [results] = await conn.execute(query, [lastname]);

    if (results.length === 0) throw new Error("Student not found");
    return results;
  }

  
  async DeleteStudent(id) {
    const conn = await Database.getConnection();
    const query = "DELETE FROM student WHERE id = ?";
    await conn.execute(query, [id]);
    console.log(`🗑️ Student ID ${id} deleted.`);
  }

  
  get GetTotalStudent() {
    return this.#TotalStudents;
  }
}

module.exports = StudentRecord;