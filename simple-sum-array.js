function simpleArraySum(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
console.log(simpleArraySum([2, 4, 5, 1, 2, 3]));
