// 11. Javascript program to print all the prime numbers in a range.

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
function primeNumber(s,e){
    for(let i=s;i<=e;i++){
        if(isPrime(i)===true){

            console.log(i);
        }
        // else{
        //     console.log("not prime");
            
        // }
    }
    
}
primeNumber(11,50)

