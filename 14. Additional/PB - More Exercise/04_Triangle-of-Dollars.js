function triangleOfDollars(input) {
    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        let printLine = "";

        for (let col = 1; col <= row; col++) {
            printLine += "$ ";

        }

        console.log(printLine);
    }
}

triangleOfDollars([5]);