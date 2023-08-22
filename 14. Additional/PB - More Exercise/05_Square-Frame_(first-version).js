function squareFrame(input) {
    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        let printLine = "";

        for (let col = 1; col <= n; col++) {
            if (row === 1 || row === n) {
                if (col === 1 || col === n) {
                    printLine += "+ ";
                } else {
                    printLine += "- ";
                }

            } else if (row !== 1 && row !== n) {
                if (col === 1 || col === n) {
                    printLine += "| ";
                } else {
                    printLine += "- ";
                }
            }
        }

        console.log(printLine);
    }
}

squareFrame([5]);