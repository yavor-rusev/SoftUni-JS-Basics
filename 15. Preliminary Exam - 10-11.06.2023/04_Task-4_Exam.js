function exam(input) {
    let studentCount = Number(input[0]);

    let gradesUnder3 = 0;
    let gradesUnder4 = 0;
    let gradesUnder5 = 0;
    let gradesAbove5 = 0;

    let sumGrades = 0;

    for (let student = 1; student <= studentCount; student++) {

        let studentGrade = Number(input[student]);

        if (studentGrade <= 2.99) {
            gradesUnder3++;

        } else if (studentGrade <= 3.99) {
            gradesUnder4++;

        } else if (studentGrade <= 4.99) {
            gradesUnder5++;

        } else if (studentGrade >= 5.00) {
            gradesAbove5++

        }

        sumGrades += studentGrade;

    }

    let studentPersentAbove5 = (gradesAbove5 / studentCount) * 100;
    let studentPersentUnder5 = (gradesUnder5 / studentCount) * 100;
    let studentPersentUnder4 = (gradesUnder4 / studentCount) * 100;
    let studentPersentUnder3 = (gradesUnder3 / studentCount) * 100;

    let averageExamGrade = sumGrades / studentCount;

    console.log(`Top students: ${studentPersentAbove5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentPersentUnder5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentPersentUnder4.toFixed(2)}%`);
    console.log(`Fail: ${studentPersentUnder3.toFixed(2)}%`);
    console.log(`Average: ${averageExamGrade.toFixed(2)}`);

}

exam([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
]);