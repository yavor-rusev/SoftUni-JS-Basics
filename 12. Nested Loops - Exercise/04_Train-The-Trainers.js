function trainTheTrainers(input) {
    let juryMembers = Number(input[0]);

    let index = 1;
    let currentElement = input[index];

    let sumAllPresentations = 0;
    let presentationsCount = 0;

    while (currentElement !== "Finish") {
        let presentationName = currentElement;
        let sumGrades = 0;
        let gradesCount = 0;

        for (let i = 1; i <= juryMembers; i++) {
            let grade = Number(input[++index]);
            sumGrades += grade;
            gradesCount++;
        }

        let averageGrade = sumGrades / gradesCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        sumAllPresentations += averageGrade;
        presentationsCount++;

        currentElement = input[++index];
    }

    let averageAllPresentations = sumAllPresentations / presentationsCount;
    console.log(`Student's final assessment is ${averageAllPresentations.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
]);