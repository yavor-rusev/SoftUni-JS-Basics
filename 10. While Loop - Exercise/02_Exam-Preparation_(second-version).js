function examPreparation(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let problem = input[index];
    let grade = Number(input[++index]);

    let badGradesReceived = 0;
    let problemCount = 0;
    let sumGrades = 0;
    let lastProblem = "";

    while (badGradesReceived < badGrades) {

        if (problem === "Enough") {
            lastProblem = input[index - 3];
            break;
        }

        problemCount++;
        sumGrades += grade;

        if (grade <= 4) {
            badGradesReceived++;
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
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);