function combinations(input) {
    let searchedCombination = Number(input[0]);

    let validCombinationConter = 0;

    let x1 = 0;
    let x2 = 0;
    let x3 = 0;

    while (x1 <= searchedCombination) {
        if (x2 >= searchedCombination) {
            x2 = 0;
        }

        while (x2 <= searchedCombination) {
            if (x3 >= searchedCombination) {
                x3 = 0;
            }

            while (x3 <= searchedCombination) {
                let sum = x1 + x2 + x3;
                
                if (sum === searchedCombination) {
                    validCombinationConter++;
                }

                x3++;
            }

            x2++;
        }

        x1++;
    }

    console.log(validCombinationConter);
}

combinations(["25"]);