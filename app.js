import readline from "readline-sync"
import cli from "cli-color"

let n=readline.question("Enter the number: ");
let ran=Math.round(Math.random()*255)
// console.log(ran);

let color=cli.xterm(ran)
function mul(n){
    for(let i=1;i<=10;i++){
        console.log(color(`${n} X ${i} =${n*i}`));
        
    }
}

mul(n)

