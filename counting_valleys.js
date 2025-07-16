function countingValleys(steps, path) {
    let Count = 0;
    let alt = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] == 'U') {
            alt++;
            if (alt == 0) {
                Count++;
            }
        } else if (path[i] =='D') {
            alt--;
        }
    }
    return Count;
}
console.log(countingValleys(8, "UDDDUDUU"));
