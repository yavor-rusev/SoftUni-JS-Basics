function christmasTree(input) {
    let n = Number(input[0]);

    let interval = " ";
    let ball = "*";
    let trunk = " | ";

    let topOfTree = "";

    for (let topCols = 1; topCols <= n; topCols++) {
        topOfTree += interval;

    }

    topOfTree += trunk;
    console.log(topOfTree);

    for (let row = 1; row <= n; row++) {

        let printLine = "";

        let leftIntervalCols = n - row;

        while (leftIntervalCols > 0) {
            printLine += interval;
            leftIntervalCols--;

        }

        let leftBallCols = row;

        while (leftBallCols > 0) {
            printLine += ball;
            leftBallCols--;

        }

        printLine += trunk;

        let rightBallCols = row;

        while (rightBallCols > 0) {
            printLine += ball;
            rightBallCols--;

        }

        let rightIntervalCols = n - row;

        while (rightIntervalCols > 0) {
            printLine += interval;
            rightIntervalCols--;

        }

        console.log(printLine);

    }
}

christmasTree([3]);