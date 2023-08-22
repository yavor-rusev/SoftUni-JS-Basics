function vegetableMarket(input){
    let vegetablesPricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let vegetablesKgs = Number(input[2]);
    let fruitsKgs = Number(input[3]);

    let totalSumInLeva = (vegetablesKgs * vegetablesPricePerKg) + (fruitsKgs * fruitsPricePerKg);
    let totalSumInEuro = totalSumInLeva / 1.94;

    console.log(totalSumInEuro.toFixed(2));    
}

vegetableMarket(["1.5",
"2.5",
"10",
"10"
]);