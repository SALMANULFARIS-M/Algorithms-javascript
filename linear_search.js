function index(n) {
  let array = [10, 20, 30, 40, 50, 60];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return i;
    }
  }
  return -1;
}
//Big O = O(n)
console.log(index(50));
