console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plusNum(startValue) {
  return function (n) {
    return startValue + n;
  };
}

const plusNum100 = plusNum(100);
const plusNum15 = plusNum(15);

console.log(plusNum15(15)); // 101
console.log(plusNum100(100)); // 151
