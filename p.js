
// how to use map method using array 

let numbers = [4, 9, 16, 25];

let sub = numbers.map(fun);

function fun(val) {
    return val;
}

console.log(numbers.map(Math.sqrt));

// how to use reduce method using array 

let arr = [10, 20, 36, 40, 50, 60];
 
function sumofArray(sum, num) {
    return sum + num;
}
function myReduce() {
    // console.log(arr.map(Math.sqrt));
    const reduce=arr.reduce((val,arr)=>{
      return val+arr;
    })
    console.log(reduce);
}
myReduce()


//              rverse string function 
let str= "hello";

reverseString(str);
function reverseString(str) {
    // Step 1: Use the split() method to return a new array
    var splitString = str.split(""); // Split the string into an array of characters

    // Step 2: Initialize an empty string to hold the reversed result
    var reversedString = "";

    // Step 3: Loop through the original array and concatenate characters in reverse order
    for (var i = 0; i < splitString.length; i++) {
        reversedString = splitString[i] + reversedString; // Add each character to the front
        console.log(reversedString);
        // console.log(splitString[i]);
    }

    // Step 4: Return the reversed string
    return reversedString; // Return the reversed string
}

console.log(reverseString("hello")); // Output: "olleh"

//spread method

const aboutWork = ["help", "students","Dr"];
const aboutUs = ["GeeksforGeeks", ...aboutWork, "grow."];

console.log(aboutUs);

//how to use callback function

function check(){
    console.log("This is callback function");
}
for(let i=0;i<5;i++){
    setTimeout(check, 10000)
}
console.log("Hi");
