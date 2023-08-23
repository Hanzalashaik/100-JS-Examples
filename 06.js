//06. Javascript Program to Solve Quadratic Equation.


let a=1;
let b=6;
let c=5;

let discriminant=b*b-(4*a*c);

if(discriminant > 0){
    
    let root1=(-b-Math.sqrt(discriminant))/2*a
    let root2=(-b+Math.sqrt(discriminant))/2*a

    console.log("Roots are real and equal Roots are: ${root1} , ${root2}");
    
    
}
else if(discriminant==0){
    root1 = root2 = -b / (2 * a);
    console.log("Roots of 1 and 2 are :",root1,root2);
    
}
else{
    let realPart= (-b / (2 * a)).toFixed(2)
    // console.log(realPart);
    
    let imagPart=(Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    
    
}