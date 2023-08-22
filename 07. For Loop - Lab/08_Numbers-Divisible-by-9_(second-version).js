function numbersDevisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let divisableNums = ``;

    for (i = num1; i <= num2; i++) {
        let currentNum = Number(i);

        if (currentNum % 9 === 0) {
            sum += currentNum;
            divisableNums += `${currentNum}\n`;
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(divisableNums);
}

numbersDevisibleBy9(["100", "200"]);