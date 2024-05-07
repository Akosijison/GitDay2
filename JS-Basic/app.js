//let - changeable variable

//const - unchangeable variable

//var - older way of calling variables

let name= "Jason";

console.log (name) // Outputs the name to html's console

const age = 28 ;

console.log (age);

name= "John"
console.log (name)

//boolean = true or false

const myDice = true;
console.log(myDice);
console.log("Is myDice", myDice);

//primitive data types
//Numbers, string, Boolean

//undefined data types
let myCity;
console.log(myCity);

//Null
let myCar = null;
console.log(myCar);

//Object Data types

//Objects 
//Arrays 
//Functions

let myNames=["John","Ralph","Jimmu","Michael"];
console.log(myNames);
console.log(myNames[0]);
console.log(myNames[1]);

let myArray=[];
console.log(myArray);



// JS operators
// arithmetic - addition (+), subtraction (-), multiplication (*),
// division (/) and modulus (%)

let x = 5;
let y = 2;

let sum = x+y;
console.log(sum);

let diff = x-y;
console.log(diff);

let product = x*y;
console.log(product);

let quotient = 5/2;
console.log(quotient);

let remainder = 5%2;
console.log(remainder);

//Logical Expressions
//&&(and), ||(or), !(not)
let sunny = true;
let warm = false;

console.log("sunny and warm", sunny && warm);
console.log("sunny or warm", sunny || warm);
console.log("Not sunny", !sunny);

//Assignment Operators
//+= -= *= /=

let a = 10;
let b = 5;

a += b;
console.log(b);
a+= a;
console.log(a);
a -= b;
console.log(a);
a *= b;
console.log(a);
a /= b;
console.log(a);

//Function
// call functions and pass arguments to it

function myFunction(num1=4,num2=6){

    console.log(num1 + num2);
}
myFunction();

function getProduct(x,y){
    console.log(x*y);
}

getProduct(10,20);

function areaRectangle(length, width){
    console.log(length * width);
}

areaRectangle(5, 4);

//Control Structures
//Conditionals
//if-else statement
//relational operators
//>= <= == ===(strictly equal to)

let temp = 21;

if(temp >= 50){
    console.log("Don't forget to hydrate")
} else if(temp >= 25 && temp <=37) {
    console.log("this is a normal Temp")
} else {
    console.log("Prepare a beer")
}

