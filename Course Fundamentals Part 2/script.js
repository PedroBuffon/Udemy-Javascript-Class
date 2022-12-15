'use strict';

// Lecture 1 strict mode
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive');
*/

// Lecture 2 Functions

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