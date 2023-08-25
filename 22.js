// 22. JavaScript Program to Find the Factors of a Number.

function factors(n){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            console.log(i);
            
        }
    }
}

factors(24)