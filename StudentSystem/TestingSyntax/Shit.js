const Scanner = require("../Ui/Scanner");

class test{
   #tui;
   #prelim;
   #midterm;
   #prefinal;
   #final;
   constructor(){
      this.#tui = new Scanner();
      
   }
   Total = () => {
      let Result = Number(this.#prelim) + Number(this.#midterm) + Number(this.#prefinal) + Number(this.#final);
      return Result = Result / 4;
       

   }
   async Menu(){
      this.#prelim = await this.#tui.nextline("Enter pre");
      this.#midterm  = await this.#tui.nextline("Enter mid");
      this.#prefinal = await this.#tui.nextline("Enter pref");
      this.#final = await this.#tui.nextline("Enter final");
      
      let result = this.Total();

      console.log(result);
     
      this.#tui.Close();
   }
  
}
 const t = new test();

 t.Menu();