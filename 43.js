// 43. JavaScript Program to Count the Number of Keys/Properties in an Object

//Method 1
let obj = {
    firstName: "hanzala",
    lastName: "shaik",
    age: 21,
  };
  
console.log(Object.keys(obj).length);
console.log(Object.values(obj).length);



//Method 2
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);