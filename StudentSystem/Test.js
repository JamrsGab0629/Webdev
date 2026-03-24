import User from "./User.js";
import Address from "./Address.js";







const add = new Address("Philippines","Bulacan","Balagtas","Santol");
const james = new User("James Gabriel","Brozula","Santos","2006-06-29","Pilipino");

console.log(add.getCountry + " " + add.getMunicipality + " " +  add.getCity +" "+ add.getBrgy);
console.log(james.GetAge);
console.log(james.GetFullname);

