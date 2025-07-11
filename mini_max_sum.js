function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let miniSumArr = 0;
  let maxSumArr = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    miniSumArr += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    maxSumArr += arr[j];
  }
  console.log(miniSumArr, maxSumArr);
}
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
