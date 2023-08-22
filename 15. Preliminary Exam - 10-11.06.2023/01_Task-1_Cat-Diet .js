function catDiet(input) {
    let fatPercent = Number(input[0]) / 100;
    let proteinPercent = Number(input[1]) / 100;
    let carbohydratesPercent = Number(input[2]) / 100;
    let totalCaloriesCount = Number(input[3]);
    let waterPercent = Number(input[4]) / 100;

    let fatCaloriesPerGram = 9;
    let proteinCaloriesPerGram = 4;
    let carbohydratesCaloriesPerGram = 4;

    let fatGrams = (totalCaloriesCount * fatPercent) / fatCaloriesPerGram;
    let proteinGrams = (totalCaloriesCount * proteinPercent) / proteinCaloriesPerGram;
    let carbohydratesGrams = (totalCaloriesCount * carbohydratesPercent) / carbohydratesCaloriesPerGram;

    let foodInGrams = fatGrams + proteinGrams + carbohydratesGrams;
    let averageCaloriesPerGram = totalCaloriesCount / foodInGrams;

    let caloriesOutOfWater = averageCaloriesPerGram * (1 - waterPercent);

    console.log(caloriesOutOfWater.toFixed(4));

}

catDiet([
    "60",
    "25",
    "15",
    "2500",
    "60"
]);