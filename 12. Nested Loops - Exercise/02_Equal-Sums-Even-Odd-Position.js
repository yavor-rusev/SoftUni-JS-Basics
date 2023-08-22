function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let equalSumsNumbers = ""

    for (let i = startNum; i <= endNum; i++) {
        let currentNumAsString = i.toString();

        let evenPositionSum = 0;
        let oddPositionSum = 0;

        for (let index = 0; index < currentNumAsString.length; index++) {
            let currentDigit = Number(currentNumAsString[index]);
            let position = index + 1;

            if (position % 2 === 0) {
                evenPositionSum += currentDigit;

            } else {
                oddPositionSum += currentDigit;

            }
        }

        if (evenPositionSum === oddPositionSum) {
            equalSumsNumbers += currentNumAsString + " ";

        }
    }

    console.log(equalSumsNumbers);
}

equalSumsEvenOddPosition(["100000", "100050"]); 