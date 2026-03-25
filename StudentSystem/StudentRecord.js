
export default class StudentRecord{
    #TotalStudents = 0;
    #Students;
    #Address
   
   

    constructor(){
        this.#Students = [];
        this.#Address = [];
       
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
