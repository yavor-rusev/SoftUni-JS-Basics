function maxNumber(input) {
    let index = 0;
    let currentElement = input[index];

    let maxNum = Number.MAX_SAFE_INTEGER;

    while (currentElement !== "Stop" && currentElement !== undefined) {
        let currentNumber = Number(currentElement);

        if (currentNumber < maxNum) {
            maxNum = currentNumber;
        }

        currentElement = input[++index];
    }

    console.log(maxNum);
}

maxNumber([
    "45",
    "-20",
    "7",
    "99",
    "Stop"
]);