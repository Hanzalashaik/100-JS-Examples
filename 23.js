// 23. JavaScript Program to Guess a Random Number.
import readline from "readline-sync"


function guess(n){
    let guessedNumber=readline.question("Enter your guess:")
    while(n!==guessedNumber){
        if(n>guessedNumber){
        console.log("TOO less");
        
    }
    else{
        console.log("TOO High");
    }
        guessedNumber=readline.question("Enter your guess:")
        console.log("Your guess is correct!");
    }
}
console.log(guess(7));
