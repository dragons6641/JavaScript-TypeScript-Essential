/*
// let saveNumber = 1;

function increment() {
  let saveNumber = 1;
  return saveNumber++;
}

console.log(increment());
console.log(increment());

// saveNumber = 200;

console.log(increment());
*/

function increment() {
  let saveNumber = 1;
  return function () {
    return saveNumber++;
  };
}

const inc = increment();

console.log(inc());
console.log(inc());
console.log(inc());

/*
class MyObj {
  private saveNumber: number
}
*/
