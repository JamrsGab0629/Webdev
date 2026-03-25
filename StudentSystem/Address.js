
class Address{
    #Country
    #Municipality
    #City
    #Brgy

    constructor(Country = "",Municipality = "",City = "",Brgy = ""){
        if(typeof Country !== "string" || 
            typeof Municipality !== "string" ||
            typeof City !== "string" ||
            typeof Brgy !== "string"

        ){
            throw new Error("type mismatch");
            
        }
        this.#Country = Country;
        this.#Municipality = Municipality;
        this.#City = City;
        this.#Brgy = Brgy;
    }
    get getCountry(){
        return this.#Country;
    }
    get getMunicipality(){
        return this.#Municipality;
    }
    get getCity(){
        return this.#City;
    }
    get getBrgy(){
        return this.#Brgy;
    }
    get FullAddress(){
         return `Country ${this.#Country} || Municipality: ${this.#Municipality} || City ${this.#City} || Brgy ${this.#Brgy}`;
    }
    toJSON() {
    return {
        Country: this.#Country,
        Municipality: this.#Municipality,
        City: this.#City,
        Brgy: this.#Brgy
    };
}
}


export default Address;