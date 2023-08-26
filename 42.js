//42. JavaScript Program to Merge Property of Two Objects

let obj1 = {
    firstName: "hanzala",
    lastName: "shaik",
    age: 21,
  };
  let clone = {address:"Hyderabad"};
  let result = Object.assign(obj1, clone);
  console.log(result);
  