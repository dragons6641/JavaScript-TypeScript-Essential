10 + 10;

const colors = [`red`, `yellow`, `black`];
const Colors = {
  blue: `blue`,
  green: `green`,
  white: `white`,
};

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

// const [red, yellow, black] = colors;
const [, yellow] = colors;
const { white, green } = Colors;

yellow;

let a = 10;
let b = `10`;

// if (a == b)
if (a === b) {
  a = 0;
} else {
  a = 1;
}

a = a === b ? 0 : 1;

(function foo() {});
