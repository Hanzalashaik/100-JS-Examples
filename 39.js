//39. JavaScript Program to Check if a Key Exists in an Object.

let obj={
    firstName:"hanzala",
    lastName:"shaik",
    age:21
}


let has=obj.hasOwnProperty("age")

if(has==true){
    console.log("key is exist");
    
}
else{
    console.log("key doesn't exist");
    
}
