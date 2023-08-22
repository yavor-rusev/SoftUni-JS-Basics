function maxNumber(input) {
    let index = 0;
    let currentElement = input[index];

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (currentElement !== "Stop") {
        let currentNumber = Number(currentElement);

        if (currentNumber > maxNum) {
            maxNum = currentNumber;
        }

        currentElement = input[++index];
    }

    console.log(maxNum);
}

maxNumber([
    "-1",
    "-2",
    "Stop"
]);