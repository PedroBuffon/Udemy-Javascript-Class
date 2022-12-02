// Lecture 1
/*

let js = 'amazing';
console.log(40+8+23-10);

let firstName = "Pedro";

console.log(firstName);
*/

// Lecture 2
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 24);
console.log(typeof 'Pedro');

javascriptIsFun = "YES!!!";

console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1997;

console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

// Lecture 3
/*
let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1998;
// const job;

var job = "Programmer";
job = "Teacher";
*/

// Lecture 4
// Math Operators
/*
const now = 2022;
const agePedro = now-1997;
const ageThiago = now-2003;
console.log(agePedro, ageThiago);

console.log(agePedro * 2, agePedro / 2, 2**3);

const firstName = "Pedro";
const lastName = "Buffon";

console.log(firstName+' '+lastName);

// Assignment operators
let x = 10 + 5;
x+= 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(agePedro > ageThiago);
console.log(ageThiago >= 18);
*/

// Lecture 5
/*
const now = 2022;
const agePedro = now-1997;
const ageThiago = now-2003;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x,y);

const averageAge = (agePedro + ageThiago) /2
console.log(agePedro, ageThiago, averageAge);
*/

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

/*
const markMass = 78;
const markHeight = 1.69;

//const markMass = 95;
//const markHeight = 1.88;

const johnMass = 92;
const johnHeight = 1.95

//const johnMass = 85;
//const johnHeight = 1.76

var markBMI =  markMass / (markHeight **2)

var johnBMI = johnMass / (johnHeight **2)

console.log(markBMI, johnBMI);
console.log(markBMI > johnBMI);

*/

// Lecture 6
/*
const firstName = 'Pedro';
const job = 'programmer';
const birthYear = 1997;
const year = 2022;

const pedro = "I'm" + firstName + ", a " + (year - birthYear) + "Years Old " + job + "!!";
console.log(pedro);

const pedro2 = `I'm ${firstName}, a ${year - birthYear} Years Old ${job}!!!`;
console.log(pedro2);

console.log(`String with Line \n\
Second String with Line \n\
`)

console.log(`New Lines
without backslash n `);
*/

// Lecture 7 Decisions
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough)
{
console.log("Can start driving license");
}else
{
    const yearsLeft = 18 - age;
console.log(`Cannot start driving license,wait another ${yearsLeft} years`);
}

const birthYear = 1997;
let century;
if(birthYear <= 2000) {
century = 20;
}else{
century = 21;
}
console.log(century);
*/

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 😉 

GOOD LUCK 😀
*/

/*
// const markMass = 78;
// const markHeight = 1.69;

const markMass = 95;
const markHeight = 1.88;

// const johnMass = 92;
// const johnHeight = 1.95

const johnMass = 85;
const johnHeight = 1.76

var markBMI =  markMass / (markHeight **2)

var johnBMI = johnMass / (johnHeight **2)

if (markBMI > johnBMI){
console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
}else{
console.log(`John's ${johnBMI} BMI is higher than Mark's ${markBMI}`)
}
*/

// Lecture 8 Type Conversion and Coercion
/*
const inputYear = '1997';
console.log(Number(inputYear));
console.log(inputYear + 18);
*/

// Lecture 9 Equality Operators
/*
const age = 18;

if(age === 18) console.log('You Just became an adult (Strict)');

if(age == 18) console.log('You Just became an adult (Loose)');

const favourite = Number(prompt("Whats is your favourite number?"));
console.log(favourite);

if(favourite === 18){
    console.log("Cool!!!!");
}else if(favourite === 7){
    console.log("Cool222!!!!");
}else{
    console.log("Nice!!!");
}

if(favourite !== 25){
    console.log("Why not 23??!");
}
*/