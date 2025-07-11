function extraLongFactorials(n) {
  let long = 1n;

  for (let i = 2n; i <= BigInt(n); i++) {
    long *= i;
  }
  console.log(long.toString());
}
console.log(extraLongFactorials(25));
