function catAndMouse(x, y, z) {
    let A = Math.abs(x - z);
    let B = Math.abs(y - z);
    if (A < B) {
        return "Cat A";
    } else if (B < A) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
console.log(catAndMouse(1, 3, 2));
