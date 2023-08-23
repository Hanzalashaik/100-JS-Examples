//05. Javascript Program to Generate a Random Number.

// let a=Math.random()

// console.log(a);
// console.log(Math.floor(a));
// console.log(Math.ceil(a));


function random(a){
    return Math.floor(Math.random()*a)
}
console.log(random(4));

function random(b){
    return Math.ceil(Math.random()*b)
}
console.log(random(4));


let k=4.4

console.log(Math.round(k));
console.log(Math.ceil(k));

