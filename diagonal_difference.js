function diagonalDifference(arr) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i];                      
        right += arr[i][arr.length - 1 - i];    
    }

    return Math.abs(left - right);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
