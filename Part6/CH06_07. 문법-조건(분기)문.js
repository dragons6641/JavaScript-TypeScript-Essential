let age = 40;

// if (age === 10 || age > 20)
// if (null)
// if (undefined)
// if ({})
if (age === 10) {
  console.log(`나이는 10세`);
} else if (age === 20) {
  console.log(`나이는 20세`);
} else if (age === 30) {
  console.log(`나이는 30세`);
} else {
  console.log(`모르겠습니다.`);
}

age = 1;

switch (age) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log(`??`);
    break;
}

if (age === 1) {
  console.log(1);
} else if (age === 2) {
  console.log(2);
} else if (age === 3) {
  console.log(3);
} else {
  console.log(`??`);
}
