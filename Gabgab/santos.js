class person{
 constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
 }
 updatetxt(elementId){
    if(this.name === "James"){
        const field = document.getElementById(elementId);
        if(field){
            field.value = this.name;
        }
    }
  
 }

 
}
window.onload = () => {
const james = new person("James",20,"Male");

james.updatetxt("");
const sarah = new person("Sarah",67,"Female");
sarah.updatetxt("");
}

class address extends person{
    constructor(City,Country){
        this.City = City;
        this.Country = Country;
    }

    Place(elementId){
       
       
        if(this.Country === "Philippines"){
           const sagot = document.getElementById(elementId);
           if(sagot){
            sagot.value = this.Country;
           }
        }
    }
}
window.onload = () => {
const ph = new address("Bulacan","Philippines");
ph.Place("txt");

}
