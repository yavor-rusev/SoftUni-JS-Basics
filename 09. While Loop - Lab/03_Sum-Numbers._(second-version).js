function sumNumbers(input) {
    let index = 0;
    let numGoal = Number(input[index]);
    let sum = 0;
    
    while (numGoal > sum) {
        let currentNum = Number(input[++index]);        
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