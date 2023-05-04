//find the nth position of fibonacci series
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//BIG O = O(n)

// find the factorial
function factorial(n, total = 1) {
  if (n < 1) {
    return total;
  }
  total = total * n;
  return factorial(n - 1, total);
}
function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//BIG O = O(n)
console.log(factorial(5));

function index(n, array, lIndex, rIndex) {
  if (lIndex <= rIndex) {
    let mIndex = Math.floor((lIndex + rIndex) / 2);
    if (n === array[mIndex]) {
      return mIndex;
    } else if (n < array[mIndex]) {
      rIndex = mIndex - 1;
      return index(n, array, lIndex, rIndex);
    } else {
      lIndex = mIndex + 1;
      return index(n, array, lIndex, rIndex);
    }
  }
  return -1;
}

let array = [10, 20, 30, 40, 50, 60];
let lIndex = 0;
let rIndex = array.length - 1;

console.log(index(0, array, lIndex, rIndex));
