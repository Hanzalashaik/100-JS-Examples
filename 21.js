function hcf(a,b){
    while(a!=b){
        if(a>b){
          a= a-b;
        }
        else{
            b=b-a;
        }
        return a;
    }
}
function lcm(a,b){
    return ((a*b)/hcf(a,b));
}

console.log(Math.floor(lcm(24,4)));
