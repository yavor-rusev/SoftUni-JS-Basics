function paintingEggs(input) {
    let size = input[0];
    let colour = input[1];
    let eggsBatch = Number(input[2]);

    let price = 0;

    switch (size) {
        case "Large":
            switch (colour) {
                case "Red": price = eggsBatch * 16;
                    break;

                case "Green": price = eggsBatch * 12;
                    break;

                case "Yellow": price = eggsBatch * 9;
                    break;

            }

            break;

        case "Medium":
            switch (colour) {
                case "Red": price = eggsBatch * 13;
                    break;

                case "Green": price = eggsBatch * 9;
                    break;

                case "Yellow": price = eggsBatch * 7;
                    break;

            }

            break;

        case "Small":
            switch (colour) {
                case "Red": price = eggsBatch * 9;
                    break;

                case "Green": price = eggsBatch * 8;
                    break;

                case "Yellow": price = eggsBatch * 5;
                    break;

            }

            break;
    }

    let expenses = price * 0.35;
    let profifAfterExpenses = price - expenses;

    console.log(`${profifAfterExpenses.toFixed(2)} leva.`);

}

paintingEggs([
    "Large",
    "Red",
    "7"
]);
