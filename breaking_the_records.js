function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let Count1 = 0;
    let Count2 = 0;

    for (let i = 1; i < scores.length; i++) {
      
        if (scores[i] > max) {
            max = scores[i];
            Count1++;
        } else if (scores[i] < min) {
            min = scores[i];
            Count2++;
        }
    }
    return [Count1, Count2];
}
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));
