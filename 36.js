// 36. JavaScript Program to Count the Number of Vowels in a String

let str="JavaScript Program to Count the Number of Vowels in a String";

let arr=str.split("");
let count=0;

for(let i=0;i<=arr.length;i++){
    if(arr[i]=="a" || arr[i]=="e" ||arr[i]=="i"|| arr[i]=="o" || arr[i]=="u"){
        count++;
    }

}
console.log(count);
