// 15. JavaScript Program to Check Whether a String is Palindrome or Not.

let n=151;
let reversed=0;
let remainder; 
let original=n;
while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n =Math.floor(n/10)
    }
console.log(reversed)

if(original==reversed){
    console.log(`${original} is palindrome`);
    
}
else{
    console.log("Not a palindrome number");
    
}
