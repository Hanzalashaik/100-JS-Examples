//20. JavaScript Program to Find HCF | using for Loop, using while Loop and if...else.

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
console.log(hcf(5,3));
