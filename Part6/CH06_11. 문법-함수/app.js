function myFn(x) {
  return x + 100;
}

/*
function sum(a, b, c) {
  return a + b + c;
}
*/

/*
function sum() {
  let s = 0;

  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }

  return s;
}
*/

function sum(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }

  return s;
}

const sumV2 = (a, b, ...args) => {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }

  return s;
};

const ten = (x, y) => {
  return 100 + x;
};

ten(10);

const result = myFn(10);
// const result = myFn();
// const abcSum = sum(10, 20, 30);
const abcSum = sum(10, 20, 30, 40);

const myFnV2 = function () {
  return 100;
};

const arr = [10, 20, 30, 40, 50];
myFnV2();
sum.call(null, 10, 20, 30, 40);
sum.apply(null, arr);

(function () {
  console.log(`즉시 실행 함수 실행!`);
})();

function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

g.next();
g.next();
g.next();

async function myTask() {}
