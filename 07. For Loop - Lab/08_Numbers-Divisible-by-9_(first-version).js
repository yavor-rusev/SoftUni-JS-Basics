function numbersDevisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let divisableNums = ``;

    for (i = start; i <= end; i++) {
        let currentNum = Number(i);

        if (currentNum % 9 === 0) {
            sum += currentNum;
        }
    }

    console.log(`The sum: ${sum}`);

    for (i = start; i <= end; i++) {
        let currentNum = Number(i);

        if (currentNum % 9 === 0) {
            divisableNums += console.log(`${currentNum}`);
        }
    }
}

numbersDevisibleBy9(["100", "200"]);