import User from "./User.js";
import Address from "./Address.js";
import { createInterface } from 'node:readline/promises';
import { stdin as input , stdout as output } from "node:process";


class Scanner{
    #rl
    constructor(){
        this.#rl = createInterface({input , output });
    }
    async nextline(prompt){
        return await this.#rl.question(prompt);
    }
    close(){
        this.#rl.close();
    }
}



const add = new Address("Philippines","Bulacan","Balagtas","Santol");
const james = new User("James Gabriel","Brozula","Santos","2006-06-29","Pilipino");

console.log(add.getCountry + " " + add.getMunicipality + " " +  add.getCity +" "+ add.getBrgy);
console.log(james.GetAge);
console.log(james.GetFullname);


const sc = new Scanner();

const age = await sc.nextline("Enter your age");
const name = await sc.nextline("enter your name");

console.log(`Name ${name} age${age}`);

sc.close();


