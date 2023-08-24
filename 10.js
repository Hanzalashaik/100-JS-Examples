//10. JavaScript Program to Check given number is Prime Number.

//Method 1
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
// console.log(isPrime(37));

//Method 2

// function prime(n) {
//   let prime = true;
//   if (n === 1) {
//     return `Neither prime nor composite`;
//   } else if (n > 1) {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
          
//           prime = false;
//           console.log("29:",prime);
//         break;
//       }
//     }
//     // console.log(prime);
//     if (prime) {
//         console.log("35:",prime);
        
//       return `prime number`;
//     }
//     else {
//       return `not a prime number`;
//     }
//   } else {
//     return `not a prime`;
//   }
// }
// console.log(prime(56));


//Method 3

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
//         if(num % i === 0) return false;
//     }
//     return num > 1;
// }

// console.log(isPrime(42));
