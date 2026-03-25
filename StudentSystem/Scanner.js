import User from "./User.js";
import Address from "./Address.js";
import { createInterface } from 'node:readline/promises';
import { stdin as input , stdout as output } from "node:process";


class Scanner{
#rf

constructor(){
    this.#rf = createInterface({input , output});
}
async nextline(prompt){
    return await this.#rf.question(prompt);

}
Close(){
    this.#rf.close();
}
}

export default Scanner;


