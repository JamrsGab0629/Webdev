class Grades{
    #Prelim;
    #Midterm;
    #Prefinal;
    #Final;

    constructor(Prelim,Midterm,Prefinal,Final){
        const pre = Number(Prelim);
        const mid = Number(Midterm);
        const pref = Number(Prefinal);
        const final = Number(Final);

        if(isNaN(pre) || isNaN(mid) || isNaN(pref) || isNaN(final)){
            throw new Error("Other types was not allowed");
        }
        this.#Prelim = pre;
        this.#Midterm = mid;
        this.#Prefinal = pref;
        this.#Final = final;
    }

get GetPrelim(){
    return this.#Prelim;

}
get GetMidterm(){
    return this.#Midterm;
}
get GetPrefinal(){
    return this.#Prefinal;
}
get GetFinal(){
    return this.#Final;
}
TotalGrades(){

    if (this.#Prelim < 0 || this.#Prelim > 100 || this.#Midterm < 0 || this.#Midterm > 100 || 
        this.#Prefinal < 0 || this.#Prefinal > 100 || this.#Final < 0 || this.#Final > 100
    ) {
    throw new Error("Grade out of bounds: Prelim must be between 0 and 100.");
}

    let Total = this.#Prelim + this.#Midterm + this.#Prefinal + this.#Final;
    Total = Total / 4;
    return Total;

}
CheckPass(){
    return this.TotalGrades() >= 75 ? "Passed" : "Failed";
}
    
}

module.exports = Grades;