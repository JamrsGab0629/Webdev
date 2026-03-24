function add(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let result;
    if(op == "Add"){
         result = n1 + n2;
       
    }else if(op == "Subtract"){
         result = n1 - n2;
       

    }else if(op == "Division"){
     result = n1 / n2;
        
    }else if(op == "Multiply"){
         result = n1 * n2;
      
    }
     document.getElementById("txt").value = result;
     
    
    
}