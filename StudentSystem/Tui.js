
import Scanner from "./Scanner.js";
import StudentRecord from "./StudentRecord.js";
import AddressDto from "./AddressDto.js";
import StudentDto from "./StudentDto.js";

class Tui {
  #record;
  constructor() {
    this.#record = new StudentRecord();
  }

  async StudentRegister() {
    const sc = new Scanner();
    let user = "";
      await this.#record.initialize();
    do {
    
      this.Menu();

      user = await sc.nextline("Enter what you want: ");
      if (user === "1") {
        const Firstname = await sc.nextline("Enter your first name: ");
        const Middlename = await sc.nextline("Enter your middle name: ");
        const Lastname = await sc.nextline("Enter your Lastname: ");
        const Birthdate = await sc.nextline(
          "Enter your birthdate (year-month-day): ",
        );
        const Nationality = await sc.nextline("Enter your Nationailty: ");

        const newstud = new StudentDto(
          Firstname,
          Middlename,
          Lastname,
          Birthdate,
          Nationality,
        );

        const info = this.GetStudentinfo(newstud);
        console.log(info);
        console.log("\n");

        const Country = await sc.nextline("Enter what country are you from: ");
        const Municipality = await sc.nextline(
          "Enter what Municipality are you in: ",
        );
        const City = await sc.nextline("What City are you in: ");
        const Brgy = await sc.nextline("What brgy are you in: ");

        const ad = new AddressDto(Country, Municipality, City, Brgy);
        const address = this.GetAdressinfo(ad);
        console.log(address);
        this.#record.AddStudent(newstud, ad);

        await this.#record.persist();
      } else if (user === "2") {
        const total = this.#record.GetTotalStudent;
        console.log(total);
      } else if (user === "3") {
        try {
          this.#record.ListOfStudents;
        } catch (err) {
          console.log(`Error the list was empty ${err.message}`);
          await sc.nextline("Please enter to continue");
        }
      }
    } while (user !== "4");
    sc.Close();
  }

  GetStudentinfo(newstud) {
    
    return `Name: ${newstud.Firstname}  ${newstud.Middlename} ${newstud.Lastname} Nationality: ${newstud.Nationality}`;
}

  GetAdressinfo(ad) {
   return `Country: ${ad.Country} Municipality: ${ad.Municipality} City: ${ad.City} brgy ${ad.Brgy}`;
  }

  Menu() {
    console.log("1.Record a student");
    console.log("2.Check how many student are there: ");
    console.log("3.Check all of the students: ");
    console.log("4.Exit: ");
  }
}

const ui = new Tui();

ui.StudentRegister();
