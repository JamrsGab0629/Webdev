class User {
  #Firstname;
  #Middlename;
  #Lastname;
  #birthdate;
  #Nationalism;

  constructor(Firstname, Middlename, Lastname, birthdate, Nationalism) {
    
    if (
      typeof Firstname !== "string" ||
      typeof Lastname !== "string" ||
      typeof Middlename !== "string" ||
      typeof birthdate !== "string" ||
      typeof Nationalism !== "string"
    ) {
      throw new Error("attributes must be String");
    }
    this.#Firstname = Firstname;
    this.#Lastname = Lastname;
    this.#Middlename = Middlename;
    this.#birthdate = birthdate;
    this.#Nationalism = Nationalism;

  }

  get GetAge() {
    const today = new Date();
    const bday = new Date(this.#birthdate);

    let age = today.getFullYear() - bday.getFullYear();

    return age;
  }
  get GetBirthdate() {
    return this.#birthdate;
  }
  get GetFullname() {
    return `${this.#Firstname} ${this.#Middlename} ${this.#Lastname}`;
  }
  get GetNationalism() {
    return this.#Nationalism;
  }
}

export default User;
