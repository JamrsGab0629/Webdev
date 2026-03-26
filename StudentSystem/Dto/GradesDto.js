export default class GradesDto{
    constructor(Prelim,Midterm,Prefinal,Final){

        const p = Number(Prelim);
        const m = Number(Midterm);
        const pre = Number(Prefinal);
        const final = Number(Final);

        if(isNaN(p) || isNaN(m) || isNaN(pre) || isNaN(final)){
            throw new Error("Grades was only integer");
        }
        this.Prelim = p;
        this.Midterm = m;
        this.Prefinal = pre;
        this.Final = final;
    }


}