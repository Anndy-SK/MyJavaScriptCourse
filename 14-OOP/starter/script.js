'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this:
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// new Person('Jonas', 1991);
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// "V klasickom OOP, objekt vytvoreny z triedy sa nazyva instancia (javascript nema triedy)" Teraz sme tu nevytvorili triedu ale objekt z funkcie konstruktora.
// test instancie:
console.log(jonas instanceof Person);

const jay = 'Jay';
console.log(jay instanceof Person);
