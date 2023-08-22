function squareFrame(input) {
    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        let printLine = "";

        for (let col = 1; col <= n; col++) {
            if (col === 1 || col === n) {
                if (row === 1 || row === n) {
                    printLine += "+ ";
                } else {
                    printLine += "| ";
                }

            } else {
                printLine += "- ";

            }
        }

        console.log(printLine);
    }
}

squareFrame([5]);