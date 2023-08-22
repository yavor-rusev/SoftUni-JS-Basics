function tournamentOfChristmas(input) {
    let index = 0;
    let daysCount = Number(input[index]);

    let totalCharityMoney = 0;
    let daysWin = 0;
    let daysLose = 0;

    for (let day = 1; day <= daysCount; day++) {

        let moneyForTheDay = 0;
        let winsCount = 0;
        let losesCount = 0;

        let currentElement = input[++index];

        while (currentElement !== "Finish") {
            let sport = currentElement;
            let result = input[++index];

            if (result === "win") {
                moneyForTheDay += 20;
                winsCount++;

            } else if (result === "lose") {
                losesCount++;

            }

            currentElement = input[++index];

        }

        if (winsCount > losesCount) {
            moneyForTheDay *= 1.10;
            daysWin++;

        } else {
            daysLose++;

        }

        totalCharityMoney += moneyForTheDay;

    }

    if (daysWin > daysLose) {
        totalCharityMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalCharityMoney.toFixed(2)}`);

    } else {
        console.log(`You lost the tournament! Total raised money: ${totalCharityMoney.toFixed(2)}`);

    }

}

tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
]);
