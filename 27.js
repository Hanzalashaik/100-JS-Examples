//27. JavaScript Program to Find Factorial of Number Using Recursion
function factorial(n){
    let fact=1
    if(n>1){
        for(let i=1;i<=n;i++){
            fact=fact*i
        }
        console.log(fact);
         
    }else if (n==0){
       console.log("1");
       
    }
    else{
        console.log("Invalid Entry");
        
    }
    
}

factorial(6)
