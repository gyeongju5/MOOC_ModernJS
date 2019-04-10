// String

const name1 = "Jeff";
const name2 = new String("Jeff");

name2.foo = "bar";

// console.log(name1);
// console.log(name2);

console.log(typeof name2);

if (name2 == "Jeff") {
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// fFUnction
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

console.log(getSum2(1, 1));
