
const { createInterface } = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');


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

module.exports = Scanner;


