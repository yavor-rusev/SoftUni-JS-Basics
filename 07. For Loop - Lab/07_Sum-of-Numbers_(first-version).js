function sumOfNumbers(input) {
    let num = input[0];
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let digit = Number(numAsString[i]);
        sum += digit;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"]);