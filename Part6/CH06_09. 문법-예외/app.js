function doException() {
  throw new Error(`와우! 오류야!`);
}

function noException() {
  return true;
}

function callException(type) {
  if (type === `do`) {
    doException();
  } else {
    noException();
    /*
    if (noException() === false) {
      console.log(`오류처리`);
    }
    */
  }
}

function main() {
  try {
    // doException();
    // noException();
    callException();
  } catch (e) {
    console.log(e);
  } finally {
    console.log(`done`);
  }
}

main();
