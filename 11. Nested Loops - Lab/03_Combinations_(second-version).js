function combinations(input) {
    let searchedCombination = Number(input[0]);

    let validCombinationConter = 0;

    for (let x1 = 0; x1 <= searchedCombination; x1++) {

        for (let x2 = 0; x2 <= searchedCombination; x2++) {

            for (let x3 = 0; x3 <= searchedCombination; x3++) {
                let sum = x1 + x2 + x3;

                if (sum === searchedCombination) {
                    validCombinationConter++;
                }
            }
        }
    }

    console.log(validCombinationConter);
}

combinations(["25"]);