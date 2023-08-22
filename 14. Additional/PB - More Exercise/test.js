function sunglasses(input) {
    let n = Number(input[0]);

    let interval = " ";
    let star = "*";
    let slash = "/";
    let pipe = "|";

    for (let row = 1; row <= n; row++) {

        if (row === 1) {

            let topLine = "";

            for (let NCols1And2 = 1; NCols1And2 <= (2 * n); NCols1And2++) {
                topLine += star;

            }

            for (let NCols3 = 1; NCols3 <= n; NCols3++) {
                topLine += interval;

            }

            for (let NCols4And5 = 1; NCols4And5 <= (2 * n); NCols4And5++) {
                topLine += star;

            }

            console.log(topLine);

        } else if (row === n) {

            let bottomLine = "";

            for (let NCols1And2 = 1; NCols1And2 <= (2 * n); NCols1And2++) {
                bottomLine += star;

            }

            for (let NCols3 = 1; NCols3 <= n; NCols3++) {
                bottomLine += interval;

            }

            for (let NCols4And5 = 1; NCols4And5 <= (2 * n); NCols4And5++) {
                bottomLine += star;

            }

            console.log(bottomLine);


        } else {

            let printLine = "";

            printLine += star;

            let leftSlashes = (2 * n) - 2;

            while (leftSlashes > 0) {
                printLine += slash;
                leftSlashes--;

            }

            printLine += star;

            let centralPart = n;

            while (centralPart > 0) {
                let properRow = Math.floor(((n - 1) / 2) + 1);

                if (row === properRow) {
                    printLine += pipe;

                } else {
                    printLine += interval;

                }

                centralPart--;

            }

            printLine += star;

            let rightSlashes = (2 * n) - 2;

            while (rightSlashes > 0) {
                printLine += slash;
                rightSlashes--;

            }

            printLine += star;

            console.log(printLine);

        }
    }
}

sunglasses([4]);