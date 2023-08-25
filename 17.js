// 17. JavaScript Program to Check Armstrong Number.

let sum=0;
let n=152

function Armstrong(n){
    // let original=n;
    while(n!==0){
        let rem=n%10;
        sum=sum+rem*rem*rem;
        n=Math.floor(n/10);
    }

    console.log(sum);
    
}
    Armstrong(n);
if(n==sum){
    console.log("it is an amstrong number;");
    
}
else{
    console.log("It is not an Amstronge number");
    
}