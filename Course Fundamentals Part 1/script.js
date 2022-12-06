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

// Lecture 10 Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Is able to drive");
}else{
    console.log("Is not able to drive");
}

const isTired = true; // C
*/

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😉 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy');
}
*/

// Lecture 11 Switch Statement
/*
const day = 'Sunday';

switch(day) {
    case 'Monday': // day === Monday
        console.log('Study');
        console.log('Go to study');
        break;
    case 'Tuesday': // day === Tuesday
        console.log('Study Tuesday');
        console.log('Go to study');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code');
        break;
    case 'Friday':
        console.log('Do some work');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
*/
// Lecture 12 Conditional Operators
/*
const age = 25;

age >=18 && age <=23 ? console.log('I like to drink wine') : console.log('I like to drink water');
*/
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

