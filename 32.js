// 32. JavaScript Program to Reverse a String | using function and for loop

let str="anas"
let arr=str.split("")

function reverse(arr){
    let length=arr.length;
    console.log(length);
    
    for(let i=length;i>0;i--){
        console.log(arr[i]);
        
    }
    
}

reverse(arr)

