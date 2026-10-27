// Simple Calculator using case

let a = 3;
let b = 0;
let operator = "/";

switch(operator) {
    case "+":
        console.log(a+b);
        break;     
    case "-":
        console.log(a-b);
        break; 
    case "*":
        console.log(a*b);
        break; 
    case "/":
        if (b===0) {
            console.log("Can't divide by 0");
        }
        else {
            console.log(a/b);           
        }
        break;
    default :
        console.log("Enter Valid Operator");
}


// Student Marks, Grade, Result & Remarks

let marks = 40;
let bonusmarks = 10;
marks+= bonusmarks;
console.log("Marks :",marks);

let grade;

if(marks >= 90) {
    grade = "A";
}
else if(marks >=70 && marks <90) {
    grade = "B";
}
else if(marks >=50 && marks <70) {
    grade = "C";
}
else {
    grade = "F";
}

console.log( "Result : " , ( marks > 49 ? "Pass" : "Fail"));
console.log("Grade : " , grade);

switch(grade) {
    case "A":
     console.log("Remark : Excellent!");
    break;
    case "B":
     console.log("Remark : Good");
    break;
    case "C":
     console.log("Remark : Average");
    break;
    case "F":
     console.log("Remark : Needs Improvement");
    break;
    
}

