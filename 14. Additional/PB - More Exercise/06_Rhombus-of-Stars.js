function rhombusOfStars(input) {
    let n = Number(input[0]);

    let interval = " ";
    let rowFirstStar = "*";
    let otherStar = " *";

    let printLine = "";

    for (let upperHalfRows = 1; upperHalfRows <= n; upperHalfRows++) {

        let upperLeftHalfCols = (n - upperHalfRows);

        while (upperLeftHalfCols > 0) {
            printLine += interval;
            upperLeftHalfCols--;

        }

        printLine += rowFirstStar;

        let upperRightHalfCols = upperHalfRows - 1;

        while (upperRightHalfCols > 0) {
            printLine += otherStar;
            upperRightHalfCols--;

        }

        console.log(printLine);
        printLine = "";
        
    }

    for (let lowerHalfRows = (n - 1); lowerHalfRows >= 1; lowerHalfRows--) {

        let lowerLeftHalfCols = lowerHalfRows;

        while ((n - lowerLeftHalfCols) > 0) {
            printLine += interval;
            lowerLeftHalfCols++;

        }

        printLine += rowFirstStar;

        let lowerRightHalfCols = lowerHalfRows - 1;

        while (lowerRightHalfCols > 0) {
            printLine += otherStar;
            lowerRightHalfCols;
            lowerRightHalfCols--;

        }

        console.log(printLine);
        printLine = "";
    }
}

rhombusOfStars([5]);