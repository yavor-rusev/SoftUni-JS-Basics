function sumPrimeNonPrime(input) {
    let index = 0;
    let currentElement = input[index];

    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;

    while (currentElement !== "stop") {
        let currentNumber = Number(currentElement);

        if (currentNumber < 0) {
            console.log("Number is negative.");
            currentElement = input[++index];
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < currentNumber; divider++) {

            if (currentNumber % divider === 0) {
                sumNonPrimeNums += currentNumber;
                isPrime = false;
                break;

            }
        }

        if (isPrime === true) {
            sumPrimeNums += currentNumber;

        }

        currentElement = input[++index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}

sumPrimeNonPrime([
    "30",
    "83",
    "33",
    "-1",
    "20",
    "stop"
]);
