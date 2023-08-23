//03. JavaScript Program to Calculate the Area of a Triangle.
// A = 1/2 × b × h

// let base=4;
// let height=45
// let area=1/2*(base*height);

// console.log(`Area of a triangle is ${area}`);

//if height and base are not given only sides are given

//√s(s - a)(s - b)(s - c) 

let a=3;
let b=5;
let c=2;

let s=(a+b+c)/2;
console.log(s);


let area2=Math.sqrt(s*(s-a)*(s-b)*(s-c))

console.log(`Area of Triangle is : ${area2}`);
