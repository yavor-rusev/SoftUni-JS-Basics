function graduation(input) {
    let name = input[0];

    let currentclass = 1;
    let grade = Number(input[currentclass]);
    let excluded = 0;
    let sumGrades = 0;

    while (currentclass <= 12) {
        if (grade < 4) {
            excluded++;
        }

        if (excluded > 1) {
            break;
        }

        sumGrades += grade;
        grade = Number(input[++currentclass]);

    }

    if (excluded > 1) {
        console.log(`${name} has been excluded at ${currentclass - 1} grade`);

    } else {
        let avgGrade = sumGrades / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation([
    "Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
]);
