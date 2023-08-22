function multiplyTable(input) {
    let givenNumberAsString = input[0];

    let firstDigit = Number(givenNumberAsString[0]);
    let secondDigit = Number(givenNumberAsString[1]);
    let thirdDigit = Number(givenNumberAsString[2]);

    for (let num1 = 1; num1 <= thirdDigit; num1++) {

        for (let num2 = 1; num2 <= secondDigit; num2++) {

            for (let num3 = 1; num3 <= firstDigit; num3++) {

                let product = num1 * num2 * num3;

                console.log(`${num1} * ${num2} * ${num3} = ${product};`);
            }
        }
    }    
}

multiplyTable(["324"]);