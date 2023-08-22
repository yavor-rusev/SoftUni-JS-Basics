function specialNumbers(input) {
    let n = Number(input[0]);

    let printSpecialNums = "";

    for (let currNum = 1111; currNum <= 9999; currNum++) {
        let currNumAsString = currNum.toString();

        let specialNum = true;

        for (let index = 0; index < currNumAsString.length; index++) {
            let currDigit = Number(currNumAsString[index]);

            if (n % currDigit !== 0) {
                specialNum = false;
                break;
            }
        }

        if (specialNum === true) {
            printSpecialNums += currNumAsString + " ";

        }
    }

    console.log(printSpecialNums);
}

specialNumbers(["11"]);