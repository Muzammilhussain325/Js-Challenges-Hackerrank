function birthdayCakeCandles(candles) {
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    let max = Math.max(...candles);
    if (candles[i] === max) {
      count++;
    }
  }
  return count;
}
console.log(birthdayCakeCandles([4, 2, 3, 4]));
