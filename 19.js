// 19. JavaScript Program to Make a Simple Calculator.
import readline from "readline-sync"
let operator=readline.question("Enter Operator:");

switch (operator) {
    case "+":
        let a=readline.questionInt("Enter First Number:")
        let b=readline.questionInt("Enter second Number:")
        
        console.log(`Addition of ${a} and ${b} is ${a+b}`);
        break;

    case "-":
        let x=readline.questionInt("Enter First Number:")
        let y=readline.questionInt("Enter second Number:")
        
        console.log(`Addition of ${x} and ${y} is ${x-y}`);
        break;


    case "*":
        let n=readline.questionInt("Enter First Number:")
        let m=readline.questionInt("Enter second Number:")
        
        console.log(`Addition of ${n} and ${m} is ${n*m}`);
        break;

    case "/":
        let p=readline.questionInt("Enter First Number:")
        let q=readline.questionInt("Enter second Number:")
        
        console.log(`Addition of ${p} and ${q} is ${p/q}`);
        break;

    
    default:console.log("Invalid Entry");
    
        break;
}