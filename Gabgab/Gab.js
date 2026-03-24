class product{
#price
#name
#stock

constructor(name,price,stock){
    this.#name = name;
    this.#price = price;
    this.#stock = stock;
}
get gstock(){
   return `Stock: ${this.#stock}`;
}
get name(){
    return `Name: ${this.#name}`;
}
get price(){
    return `Price: ${this.#price}`;
}
set stock(value){
    if(value < 0 || value == 0){
        console.log("stock can not be neagative")
    }else{
        this.#stock = value;
        console.log(`Stock Updated to ${this.#stock}`);
    }

}
purchase(quantity){

if(quantity <= 0){
    console.log("DONT PUT NEGATIVE ITEMS");
        return;

}
if(this.#stock >= quantity){
    this.#stock -= quantity;
    console.log(`Your purchase is succesful ${this.#stock}`);


}
else{
    console.log(`insuficient stock ${this.#stock}`);
}
}
SeeStock(accountname){
const myinventory = [accountname];
for(let item of myinventory){
    console.log(`${item.name} | ${item.price} | ${item.gstock}`)
}
}
}
let myaccount;

myaccount = new product("Pc",1000,50);

myaccount.purchase(5);
console.log(myaccount.price);
console.log(myaccount.gstock);
myaccount.stock = 67;
console.log(myaccount.gstock);

myaccount.SeeStock(myaccount);
const secondaccount = new product("SmartPhone",500,10);
secondaccount.purchase(2)
console.log(secondaccount.gstock);
secondaccount.SeeStock(secondaccount);