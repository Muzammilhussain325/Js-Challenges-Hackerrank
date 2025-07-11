function plusMinus(arr) {
  let plusRatio = 0;
  let minusRatio = 0;
  let zeroRatio = 0;
  let length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plusRatio++;
    } else if (arr[i] < 0) {
      minusRatio++;
    } else if (arr[i] === 0) {
      zeroRatio++;
    }
  }
  console.log((plusRatio / length).toFixed(6));
  console.log((minusRatio / length).toFixed(6));
  console.log((zeroRatio / length).toFixed(6));
}

console.log(plusMinus([1, 1, 0, 1, -1, -1]));
