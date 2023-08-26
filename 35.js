// 35. JavaScript Program to Convert the First Letter of a String into UpperCase

let str="hanzala"

function strupper(str){

    const capital=str.charAt(0).toUpperCase()+str.slice(1)
    console.log(capital);
    
}

strupper(str)
console.log(str.slice(1));

