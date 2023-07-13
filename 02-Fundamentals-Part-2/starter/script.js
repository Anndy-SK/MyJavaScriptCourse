/* Lecture: Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if =23;
*/


/* Lecture: Functions
function logger(){
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/


/* Lecture: Function Declarations vs. Expressions
// Function declaration:
function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// console.log(age1);

// Function expression:
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

