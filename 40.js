// 40. JavaScript Program to Clone a JS Object

// Method 1
let obj = {
  firstName: "hanzala",
  lastName: "shaik",
  age: 21,
};

let cloneobj1 = obj;
console.log(cloneobj1);

// Method 2

let obj1 = {
  firstName: "hanzala",
  lastName: "shaik",
  age: 21,
};
let clone = {};
let result = Object.assign(clone, obj1);
console.log(result);

// Method 3
let obj2 = {
  firstName: "hanzala",
  lastName: "shaik",
  age: 21,
};

let cloneobj2 = { ...obj2 };

console.log(cloneobj2);
