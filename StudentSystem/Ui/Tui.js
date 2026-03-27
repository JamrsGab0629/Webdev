    const Scanner = require("./Scanner.js");
    const StudentRecord = require("../Services/StudentRecord.js");
    const AddressDto = require("../Dto/AddressDto.js");
    const StudentDto = require("../Dto/StudentDto.js");
    const GradesDto = require("../Dto/GradesDto.js");
    

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

            const prelim = await sc.nextline("Enter your Preliminary grades: ");
            const midterm = await sc.nextline("Enter your Midterm Grades: ");
            const prefinal = await sc.nextline("Enter your prefinals: ");
            const final = await sc.nextline("Enter your final grades: ");

            const g =  new GradesDto(prelim,midterm,prefinal,final);
            this.#record.AddStudent(newstud, ad,g);

          
          } else if (user === "2") {
            const total = this.#record.GetTotalStudent;
            console.log(total);
          } else if (user === "3") {
            try {
        
          const allData = await this.#record.initialize(); 

          if (allData.length === 0) {
              console.log(" No records found in the database.");
          } else {
              console.log("\n CURRENT STUDENT LIST ");
            
              console.table(allData); 
          }
      } catch (err) {
          console.log(`Error: ${err.message}`);
      }
      await sc.nextline("Press Enter to continue...");
          } else if (user === "4") {
          try {
          const lastname = await sc.nextline("Enter the lastname: ");
          
        
          const results = await this.#record.StudentSearch(lastname); 

        
          console.log(`\n Search Results for "${lastname}" `);
          console.table(results); 

      } catch (err) {
          
          console.log(`\nerror ${err.message}`);
      }
      await sc.nextline("Press Enter to continue...");
          } else if (user === "5") {
            try {
        
          console.log("\n Current Students");
          const list = await this.#record.initialize(); 
          console.table(list);

        
          const idToDelete = await sc.nextline("Enter the ID of the student to delete: ");

        
          await this.#record.DeleteStudent(idToDelete);

          console.log(`\n Successfully deleted Student ID: ${idToDelete}`);
      } catch (err) {
          console.log(`\n Error deleting student: ${err.message}`);
      }
      await sc.nextline("Press Enter to continue...");
          }
        } while (user !== "6");
        sc.Close();
        process.exit(0);
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
        console.log("4.Search the Student by Lastname");
        console.log("5.Delete Student: ");
        console.log("6.Exit");
      }
    }

    const ui = new Tui();

    ui.StudentRegister();
