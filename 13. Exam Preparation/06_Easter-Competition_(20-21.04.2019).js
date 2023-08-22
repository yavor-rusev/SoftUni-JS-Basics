function easterCompetition(input) {

    let index = 0;
    let easterBreadCount = Number(input[index]);

    let winnersName = "";
    let winnersPoints = 0;

    for (let currEasterBread = 1; currEasterBread <= easterBreadCount; currEasterBread++) {

        let chefName = input[++index];
        let chefsPoints = 0;

        let nextElement = input[++index];

        while (nextElement !== "Stop") {

            let gradePoints = Number(nextElement);
            chefsPoints += gradePoints;

            nextElement = input[++index];

        }

        console.log(`${chefName} has ${chefsPoints} points.`);

        if (chefsPoints > winnersPoints) {
            console.log(`${chefName} is the new number 1!`);
            winnersName = chefName;
            winnersPoints = chefsPoints;

        }
    }

    console.log(`${winnersName} won competition with ${winnersPoints} points!`);

}

easterCompetition([
    "2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"
]);