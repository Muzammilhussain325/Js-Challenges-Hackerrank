function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let arr = ar[i] + ar[j];
      if (arr % k === 0) count++;
    }
  }
  return count;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
