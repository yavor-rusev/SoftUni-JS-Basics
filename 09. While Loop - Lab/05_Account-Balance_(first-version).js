function accountBalance(input) {
    let totalSum = 0;

    let index = 0;
    let currElement = input[index];
    index++;

    while (currElement !== "NoMoreMoney") {
        currElement = Number(currElement);

        if (currElement < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${currElement.toFixed(2)}`);
        totalSum += currElement;

        currElement = input[index];
        index++;
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance([
    "120",
    "45.55",
    "-150"
]);