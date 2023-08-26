//34. JavaScript Program to Check the Number of Occurrences of a Character in the String

const str="javaScript and java is a cool language and";

let regx=/java/g
let result=str.match(regx)
console.log(result);

console.log(result.length);
