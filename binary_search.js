function index(n) {
  let array = [10, 20, 30, 40, 50, 60];
  let lIndex = 0;
  let rIndex = array.length - 1;
  while (lIndex <= rIndex) {
    let mIndex = Math.floor((lIndex + rIndex) / 2);
    if (n === array[mIndex]) {
      return mIndex;
    }
    if (n < array[mIndex]) {
      rIndex = mIndex - 1;
    } else {
      lIndex = mIndex + 1;
    }
  }
  return -1;
}
//Big O = O(logn)
console.log(index(50));
