import User from "./User.js";
import Address from "./Address.js";
import Scanner from "./Scanner.js";

class Tui {
  async StudentRegister() {
    const sc = new Scanner();

    const Firstname = await sc.nextline("Enter your first name: ");
    const Middlename = await sc.nextline("Enter your middle name: ");
    const Lastname = await sc.nextline("Enter your Lastname: ");
    const Birthdate = await sc.nextline(
      "Enter your birthdate (year-month-day): ",
    );
    const Nationality = await sc.nextline("Enter your Nationailty: ");

    const newstud = new User(
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
    const Municipality = await sc.nextline("Enter what Municipality are you in: ");
    const City = await sc.nextline("What City are you in: ");
    const Brgy = await sc.nextline("What brgy are you in: ");

    const ad = new Address(Country, Municipality, City, Brgy);
    const address = this.GetAdressinfo(ad);
    console.log(address);
    sc.Close();
  }
  GetStudentinfo(newstud) {
    return `Name: ${newstud.GetFullname} Age: ${newstud.GetAge} Nationality: ${newstud.GetNationality}`;
  }
  GetAdressinfo(ad) {
    return `Country: ${ad.getCountry} Municipality: ${ad.getMunicipality} City: ${ad.getCity} Brgy: ${ad.getBrgy}`;
  }
}
const ui = new Tui();

ui.StudentRegister();
