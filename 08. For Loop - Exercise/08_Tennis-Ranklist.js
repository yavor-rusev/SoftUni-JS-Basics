function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let tournamentsWon = 0;
    let pointsWon = 0;
        
    for (let i = 2; i <= tournamentsCount + 2; i++) {
        let result = input[i];
        
        if (result === "W") {
            tournamentsWon++;
            pointsWon += 2000;

        } else if (result === "F") {
            pointsWon += 1200;
            
        }if (result === "SF") {
            pointsWon += 720;
            
        }
    }

    let finalPoints = initialPoints + pointsWon;
    let pointsWonAverage = pointsWon / tournamentsCount;
    let winsPercent = (tournamentsWon / tournamentsCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(pointsWonAverage)}`);
    console.log(`${winsPercent.toFixed(2)}%`);
}

tennisRanklist([
    "4",
    "750",
    "SF",
    "W",
    "SF",
    "W"
]);
