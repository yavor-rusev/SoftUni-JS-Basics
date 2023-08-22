function multiplicationTable() {
    for (let firstNum = 1; firstNum <= 10; firstNum++) {

        for (let secondNum = 1; secondNum <= 10; secondNum++) {
            let product = firstNum * secondNum;
            console.log(`${firstNum} * ${secondNum} = ${product}`);
        }
    }
}

multiplicationTable();
