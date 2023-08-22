function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    if (operator === "+") {
        let result = num1 + num2;
        let evenOrOdd = "";

        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "-") {
        let result = num1 - num2;
        let evenOrOdd = "";

        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "*") {
        let result = num1 * num2;
        let evenOrOdd = "";

        if (result % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);

        } else {
            let result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);

        }

    } else if (operator === "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);

        } else {
            let result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);

        }
    }
}

operationsBetweenNumbers(["7", "3", "*"]);
