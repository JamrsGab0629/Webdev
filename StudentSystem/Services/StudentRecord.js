import JsonHandler from "../DataBase/JsonHandler.js";
import Address from "../Strategy/Address.js";
import User from "../Strategy/User.js";
import Grades from "../Strategy/Grades.js";

export default class StudentRecord {
  #TotalStudents = 0;
  #Students;
  #Address;
  #db;
  #Grades;

  constructor() {
    this.#Students = [];
    this.#Address = [];
    this.#Grades = [];
    this.#db = new JsonHandler();
  }
  async persist() {
    const data = {
      student: this.#Students,
      address: this.#Address,
      grades: this.#Grades,
    };
    await this.#db.save(data);
  }
  async initialize() {
    const data = await this.#db.load();
    if (!data || !data.student || !data.grades) {
      this.#Students = [];
      this.#Address = [];
      this.#Grades = [];
      return;
    }

    this.#Students = data.student.map((s) => {
      return new User(
        s.Firstname,
        s.Lastname,
        s.Middlename,
        s.Birthdate,
        s.Nationality,
      );
    });
    this.#Address = data.address.map((a) => {
      return new Address(a.Country, a.Municipality, a.City, a.Brgy);
    });

    this.#Grades = data.grades.map((g) => {
      return new Grades(g.Prelim, g.Midterm, g.Prefinal, g.Final);
    });

    this.#TotalStudents = this.#Students.length;
  }

  get GetTotalStudent() {
    return this.#TotalStudents;
  }
  get ListOfStudents() {
    if (
      this.#Students.length === 0 ||
      this.#Address.length === 0 ||
      this.#Grades.length === 0
    ) {
      throw new Error("The list was empty");
    }
    for (
      let i = 0;
      i < this.#Students.length && i < this.#Address.length && i < this.#Grades.length;
      i++
    ) {
      const stud = this.#Students[i];
      const add = this.#Address[i];
      const grades = this.#Grades[i];

      console.log(
        `${i + 1} Student: ${stud.GetFullname} Address ${add.FullAddress} Grades ${grades.TotalGrades()} Status ${grades.CheckPass()}`,
      );
    }
  }
  AddStudent(studentDto, addressDto, gradesDto) {
    const newStudent = new User(
      studentDto.Firstname,
      studentDto.Lastname,
      studentDto.Middlename,
      studentDto.Birthdate,
      studentDto.Nationality,
    );

    const newAddress = new Address(
      addressDto.Country,
      addressDto.Municipality,
      addressDto.City,
      addressDto.Brgy,
    );
    const newGrades = new Grades(
      gradesDto.Prelim,
      gradesDto.Midterm,
      gradesDto.Prefinal,
      gradesDto.Final,
    );

    this.#Students.push(newStudent);
    this.#Address.push(newAddress);
    this.#Grades.push(newGrades);
    this.#TotalStudents = this.#Students.length;
  }
  async SearchStudent(lastname) {
    if (this.#Students.length === 0) {
      throw new Error("The List was empty");
    }
    const result = this.#Students.filter(
      (student) => student.GetLastname.toLowerCase() === lastname.toLowerCase(),
    );

    if (result.length === 0) {
      throw new Error("lastname was not found");
    }
    result.forEach((stud, index) => {
      console.log(`${index + 1}. Found: ${stud.GetFullname}`);
    });
    return result;
  }

  DeleteStuds(index) {
    if (index < 0 || index >= this.#Students.length) {
      throw new Error("It doesnt exist");
    }
    const removedstudent = this.#Students.splice(index, 1);
    this.#Address.splice(index, 1);
    this.#Grades.splice(index, 1);

    this.#TotalStudents = this.#Students.length;
    return removedstudent[0];
  }
}
