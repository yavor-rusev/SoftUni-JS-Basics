function vowelsSum(input) {
    let text = input[0];
    let vowelsSum = 0;

    for (i = 0; i < text.length; i++) {
        let letter = text[i];

        switch (letter) {
            case "a": vowelsSum += 1; break;
            case "e": vowelsSum += 2; break;
            case "i": vowelsSum += 3; break;
            case "o": vowelsSum += 4; break;
            case "u": vowelsSum += 5; break;
        }
    }

    console.log(vowelsSum);
}

vowelsSum(["beer"]);