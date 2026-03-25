
import JsonHandler from "./JsonHandler.js";
import Address from "./Address.js";
import User from "./User.js";
export default class StudentRecord{
    #TotalStudents = 0;
    #Students;
    #Address
    #db
   

    constructor(){
        this.#Students = [];
        this.#Address = [];
        this.#db = new JsonHandler();
    }
    async persist(){
        const data = {student: this.#Students,address: this.#Address}
        await this.#db.save(data);


    }
    async initialize(){
        const data = await this.#db.load();
        if(!data) return;

        this.#Students = data.student.map(s => Object.assign(new User(),s));
        this.#Address = data.address.map(a => Object.assign(new Address(),a));

    }
    
    get GetTotalStudent(){
        return this.#TotalStudents;

    }
     get ListOfStudents(){
        if(this.#Students.length === 0 || this.#Address.length === 0){
            throw new Error("The list was empty");
        }
        for(let i = 0; i < this.#Students.length && i < this.#Address.length; i++){
            const stud = (this.#Students[i]);
            const add = (this.#Address[i]);
            console.log(`${i + 1} Student: ${stud.GetFullname} Address ${add.FullAddress}`);
        }
    }
    AddStudent(student,address){
        this.#Students.push(student);
        this.#Address.push(address);
        this.#TotalStudents++;
    }


}
