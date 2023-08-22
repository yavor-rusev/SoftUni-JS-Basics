function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;
    let magicNumberIsFound = false;

    for (let firstNum = x; firstNum <= y; firstNum++) {
        for (let secondNum = x; secondNum <= y; secondNum++) {
            let sum = firstNum + secondNum;
            combinationCounter++;

            if (sum === magicNumber) {
                let validCombination = combinationCounter;
                magicNumberIsFound = true;

                console.log(`Combination N:${validCombination} (${firstNum} + ${secondNum} = ${sum})`);
                break;
            }
        }

        if (magicNumberIsFound) {
            break;
        }
    }

    if (!magicNumberIsFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["88", "888", "2000"]);