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

// Lecture 5 Functions calling functions
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

// Review Functions
/*
const calcAge =function(birthYear){
    return 2022 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired}`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1997, 'Pedro Buffon'));
*/

// Coding Challenge #1
/*
*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores ????

GOOD LUCK ????
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ???? (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ???? (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);
*/

// Lecture 6 Arrays
/*
const friends = ['Peter', 'Thiago', 'John']
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2022);
console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Pedro';
const pedro = [firstName, 'Buffon', 2022 - 1997, 'developer', friends];
console.log(pedro);
console.log(pedro.length);

const calcAge = function (birthYear){
    return 2022 - birthYear;
}
const years = [1991, 1984, 2008, 2022];
*/

// Lecture 7 Array Operations
/*
const friends = ['Michael', 'John', 'Peter'];
// Add elements
const newLength = friends.push(['jay']);
console.log(friends);
console.log(newLength);

friends.unshift(['Pedro']);
console.log(friends);

// Remove elements
friends.pop(); // last

console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Michael'));

console.log(friends.includes('John'));
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) ????

GOOD LUCK ????
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// Lecture 8 Objects
/*
const pedroArray = [
    'Pedro',
    'Buffon',
    2022 - 1997,
    'developer',
    ['Thiago', 'Peter', 'Steve']
];

console.log(pedroArray);

const pedro = {
    firstName: 'Pedro',
    lastName: 'Buffon',
    age: 2022 - 1997,
    job: 'Developer',
    friends: ['Thiago', 'Peter', 'Steve']
};
console.log(pedro);
*/

// Lecture 9 Dot vs. Bracket Notation
/*
const pedro = {
    firstName: 'Pedro',
    lastName: 'Buffon',
    age: 2022 - 1997,
    job: 'Developer',
    friends: ['Thiago', 'Peter', 'Steve']
};
console.log(pedro.lastName);
console.log(pedro['lastName']);

const nameKey = 'Name';
console.log(pedro['first' + nameKey]);
console.log(pedro['last' + nameKey]);

// console.log(pedro.'first' + nameKey); // This don't work with dot

const interestedIn = prompt('What do you want to know about Pedro? Choose between firstName, lastName, age, job and friends');

if (pedro[interestedIn]){
    console.log(pedro[interestedIn]);
}else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}
pedro.location = 'Brazil';
pedro['Youtube'] = '@peterbuffon';
console.log(pedro);

// Challenge
console.log(`${pedro.firstName} has ${pedro.friends.length} friends`);
*/

// Lecture 10 Object Methods
/*
const pedro = {
    firstName: 'Pedro',
    lastName: 'Buffon',
    birthYear: 1997,
    job: 'Developer',
    friends: ['Thiago', 'Peter', 'Steve'],
    hasDriverLicense: true,

    // calcAge: function(birthYear){
    //     return 2022 - birthYear;
    // }

    calcAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${pedro.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(pedro.calcAge());

console.log(pedro.age);
console.log(pedro.age);
console.log(pedro.age);

// console.log(pedro['calcAge'](1997));

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(pedro.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK ????
*/

/*
const mark = {
fullName: 'Mark Miller',
mass: 78,
height: 1.69,
calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
}
};

const john = {
fullName: 'John Smith',
mass: 92,
height: 1.95,
calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
}
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/