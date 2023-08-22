function examPreparation(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let problem = input[index];
    let grade = Number(input[++index]);

    let badGradesReceived = 0;
    let problemCount = 0;
    let sumGrades = 0;
    let lastProblem = "";

    while (problem !== "Enough") {
        lastProblem = problem;
        problemCount++;
        sumGrades += grade;

        if (grade <= 4) {
            badGradesReceived++;
        }

        if (badGradesReceived >= badGrades) {
            break;
        }

        problem = input[++index];
        grade = Number(input[++index]);
    }

    let avrGrade = sumGrades / problemCount;

    if (problem === "Enough") {
        console.log(`Average score: ${avrGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${lastProblem}`);

    } else {
        console.log(`You need a break, ${badGradesReceived} poor grades.`);

    }
}

examPreparation([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);