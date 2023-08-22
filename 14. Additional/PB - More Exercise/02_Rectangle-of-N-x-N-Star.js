function rectangleOfNxNStars(input) {
    let n = Number(input[0]);

    for (let a = 1; a <= n; a++) {
        let printLine = "";

        for (let b = 1; b <= n; b++) {
            printLine += "*";

        }

        console.log(printLine);

    }
}

rectangleOfNxNStars([5]);