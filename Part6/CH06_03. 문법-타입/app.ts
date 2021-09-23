// JavaScript
/*
function addAge(age) {
  // return age + 1;

  if (typeof age === `number`) {
    return age + 1;
  } else {
    throw `ERROR!!`;
  }
}

let age = addAge(30);
// let age = addAge(`30`);

age = 10;
age = false;
age = {};

console.log(age);
*/

// TypeScript
function addAge(age: number): number {
  return age + 1;
}

let age: number = addAge(30);
// let age = addAge(`30`);

console.log(age);
