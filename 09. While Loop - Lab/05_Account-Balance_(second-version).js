function accountBalance(input) {
    let totalSum = 0;

    let index = 0;
    let currElement = input[index];

    while (currElement !== "NoMoreMoney") {
        let elementAsNumber = Number(currElement);

        if (elementAsNumber < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        totalSum += elementAsNumber;

        currElement = input[++index];
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance([
    "120",
    "45.55",
    "-150"
]);

