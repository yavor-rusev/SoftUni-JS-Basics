function sumNumbers(input) {
    let numGoal = Number(input[0]);
    let sum = 0;

    let index = 1;

    while (numGoal > sum) {
        let currentNum = Number(input[index]);
        index++;
        sum += currentNum;
    }

    console.log(sum);
}

sumNumbers([
    "20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]);