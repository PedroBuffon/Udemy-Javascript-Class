'use strict';

// Lecture 1 strict mode
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive');
*/

// Lecture 2 Functions
/*
function logger(){
    console.log('My name is Pedro');
}
//calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Lecture 3 Function Declarations vs. Expressions
/*
function calcAge1(birthYear){
    return 2022 - birthYear;;
}
const age1 = calcAge1(1997);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age2);
*/

// Lecture 4 Arrow Functions
/*
//function expression
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1997, 'Pedro Buffon'));
*/