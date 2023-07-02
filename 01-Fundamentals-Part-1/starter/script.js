// 29.6.2023
/* Lecture: Values and Variables:
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23)

let firstName = "Jonas";
console.log(firstName);

// let PI = 3;
*/

// 2.7.2023
/* Lecture: Data Types:
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/* Lecture: LET, CONST and VAR
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';
console.log(job);
console.log(typeof job);

lastName = 'Schmedtmann';
console.log(lastName);
*/

/* Lecture: Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let X = 10 + 5; // 15
X += 10;        // X = X + 10 = 25
X *= 4;         // X = X * 4 = 100
X++;            // X = X + 1
X--;            // X = X - 1
X--;
console.log(X);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/* Lecture: Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;    // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/