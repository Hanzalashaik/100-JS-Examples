// 33. Important : JavaScript Program to Create Objects in Different Ways | using object literal, using new keyword, constructor


// Method 1
let obj1={
    firstName:"hanzala",
    lastName:"shaikh",
    age:21,
}

console.log(obj1);

//Method 2

let obj2=Object.create({
    firstName:"suhail",
    lastName:"Roushan",
    age:21
})

console.log(obj2.firstName);
console.log(obj2.lastName);
console.log(obj2.age);

// Method 3 

let obj3=new Object({
    firstName:"suhail",
    lastName:"Roushan",
    age:21
})

console.log(obj3);


