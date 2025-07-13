function gradingStudents(grades) {
    let arr= [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade >= 38) {
            let rem = grade % 5;
            if (5 - rem < 3) {
                grade = grade + (5 - rem);
            }
        }
        arr[i] = grade;
    }
    return arr;
}
console.log(gradingStudents([73, 68, 38, 33]));
