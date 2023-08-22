function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let assessorCount = Number(input[2]);

    let pointsReceived = 0;

    for (let i = 3; i < (assessorCount * 2) + 3; i += 2) {
        let assessorName = input[i];
        let assessorNameLength = Number(assessorName.length);
        let assessorPoints = Number(input[i + 1]);

        pointsReceived = (assessorNameLength * assessorPoints) / 2;
        academyPoints += pointsReceived;

        if (academyPoints >= 1250.5) {
            break;
        }
    }

    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);

    } else {
        let pointsNeeded = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);

    }
}

oscars([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);