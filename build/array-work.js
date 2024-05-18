"use strict";
console.log("Starting Point");
// TypeScript Arrays
// TypeScript has a specific syntax for typing arrays.
let noOfItems = [
    "1:",
    "2:",
    "3:",
    "4:",
    "5:",
    "6:",
    "7:",
    "8:",
    "9:",
    "10:",
];
console.log("No Of Items:", noOfItems); // we use this code for making number of Items. 
//we are using this code for making Catalogue Of Murk Publication
let catalogueOFMUrkPublication = [
    "failure is the first step to success (Motivation):",
    "Bequest of Bhattai (Latifiyat):",
    "I Love you (Novel):",
    "Shah Jo Risalo (Translation):",
    "Sindh Graduates Association 50 year of Service to Sindh (History):",
    "From utopia to dystopia (Literary criticism):",
    "Sindhi basic grammar: ",
    "Shah Latif (Novel):",
    "Criticism and Sindhi literature (Criticism):",
];
// console.log(catalogueOFMUrkPublication); // basically code of "console" we are using for print the value on command line. only nothing is another important.  
// first of all if we want to add/push value so we can run our code simply as up given. 
// second thing is if we want to use readonly, and we want no one can interrupt in our code, so we have to use "push".
// we use this code for making Catalogue Of Murk Publication
// readonly
/*let catalogueOFMUrkPublication: readonly string[] = [
  "failure is the first step to success (Motivation):",
  "Bequest of Bhattai (Latifiyat):",
  "I Love you (Novel):",
  "Shah Jo Risalo (Translation):",
  "Sindh Graduates Association 50 year of Service to Sindh (History):",
  "From utopia to dystopia (Literary criticism):",
  "Sindhi basic grammar: ",
  "Shah Latif (Novel):",
  "Criticism and Sindhi literature (Criticism):",
];
console.log(catalogueOFMUrkPublication); */
// push command
catalogueOFMUrkPublication.push("A grammar of society and politics (Criticism):");
console.log("book Name:", catalogueOFMUrkPublication); // we use this code for Addition of an other item. */
// accessing array value (index)        (if you want to check this code which is given bellow then you have to uncomment and see the line 58.)   
//console.log("line 58", catalogueOFMUrkPublication[1]); // we use this code for Accessing a value. 
let priceList = [200, 400, 200, 1000, 1000, 700, 200, 700, 500];
// console.log(priceList); we use this code for making  Price List. 
priceList.push(400);
console.log("price list", priceList); // Addition of Price in List. 
console.log("No: Book Name: Price: Multiplication:  Quantity: Total:"); // headings
let Add = noOfItems[8] + " " + catalogueOFMUrkPublication[8] + " " + priceList[8];
// console.log(Add); we use this code for Addition of  two and more then one things.  
// operators multiplication 
let multiplySign = "x 10 copies ="; // we use this code for multiply sign.  
let multiplication = priceList[8] * 10; // we use this code for multiplication price.
let numberOfCopies = "copies"; // we use this code for number of copies.  
// we use this code for adding strings.
let add2 = Add + " " + multiplySign + " " + multiplication;
console.log(add2); // 
//if you want to check this code which is given bellow then you have to uncomment and see the line 89. 
// typescript arrays. 
/* Type Inference
// TypeScript can infer the type of an array if it has values.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[2]; // no error11
console.log("line 89", head);*/
// TypeScript Tuples
// explain:In TypeScript, a tuple is a data structure that allows you-
// to store a fixed number of elements of different types.
//Think of it as a container that can hold multiple values, each at a specific position.
// OR 
//A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// define our tuple
let Quiz;
// initialize correctly
Quiz = [5, "Pakistan is the muslim country", true];
//Quiz.push("Pakistan Zindabad"); 
console.log(Quiz);
// Readonly tuple
let Quiz1;
// initialize correctly
Quiz = [5, "india is the nonmuslim country", true];
//Quiz1.push("Pakistan Zindabad"); error comes  
console.log(Quiz);
console.log("Quiz");
// Destructuring Tuples
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log("x:", x); // print the value of x
console.log("y:", y); // print the value of y 
