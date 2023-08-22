function careOfPuppy(input) {
    let foodInKilos = Number(input[0]);

    let foodInGrams = foodInKilos * 1000;
    let foodEaten = 0;

    let index = 1;
    let currentElement = input[index];

    while (currentElement !== "Adopted") {

        let currentFood = Number(currentElement);
        foodEaten += currentFood;

        currentElement = input[++index];

    }

    if (foodInGrams >= foodEaten) {
        let foodRemainder = foodInGrams - foodEaten;
        console.log(`Food is enough! Leftovers: ${foodRemainder} grams.`);

    } else {
        let foodNeeded = foodEaten - foodInGrams;
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);

    }
}

careOfPuppy([
    "4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"
]);