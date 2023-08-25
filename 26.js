// 26. JavaScript Program to Display Fibonacci Sequence Using Recursion.

function Fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    
    return Fibonacci(n-2)+Fibonacci(n-1)
}    

console.log(Fibonacci(5));
