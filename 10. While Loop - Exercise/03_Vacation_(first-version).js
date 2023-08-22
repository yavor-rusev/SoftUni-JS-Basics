function vacation(input) {
    let vacationPrice = Number(input[0]);
    let moneyAtDisposal = Number(input[1]);

    let index = 2;
    let spendOrSave = input[index];
    let moneyToSpendOrSave = Number(input[++index]);
    let spendCounter = 0;
    let days = 0;

    while (moneyAtDisposal < vacationPrice) {
        days++;

        if (spendOrSave === "spend") {
            spendCounter++;

            if (moneyAtDisposal < moneyToSpendOrSave) {
                moneyAtDisposal = 0;

            } else {
                moneyAtDisposal -= moneyToSpendOrSave;

            }
        }

        if (spendOrSave === "save") {
            spendCounter = 0;
            moneyAtDisposal += moneyToSpendOrSave;
        }

        if (spendCounter >= 5) {
            break;

        }

        spendOrSave = input[++index];
        moneyToSpendOrSave = Number(input[++index]);

    }

    if (moneyAtDisposal >= vacationPrice) {
        console.log(`You saved the money for ${days} days.`);

    } else {
        console.log("You can't save the money.");
        console.log(`${days}`);
    }
}

vacation([
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
]);