function rectangleOf10X10Stars() {

    for (let a = 1; a <= 10; a++) {
        let printLine = "";

        for (let b = 1; b <= 10; b++) {
            printLine += "*";

        }

        console.log(printLine);

    }
}

rectangleOf10X10Stars();