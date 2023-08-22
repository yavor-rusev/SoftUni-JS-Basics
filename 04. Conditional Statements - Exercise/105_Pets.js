function pets(input) {
    let days = Number(input[0]);
    let foodKilos = Number(input[1]);
    let dogFoodKilosPerDay = Number(input[2]);
    let catFoodKilosPerDay = Number(input[3]);
    let turtleFoodGramsPerDay = Number(input[4]);

    let turtleFoodKilosPerDay = turtleFoodGramsPerDay / 1000;

    totalFoodNeeded = (dogFoodKilosPerDay + catFoodKilosPerDay + turtleFoodKilosPerDay) * days;

    if(foodKilos >= totalFoodNeeded) {
        let foodRemainder = foodKilos - totalFoodNeeded;
        console.log(`${Math.floor(foodRemainder)} kilos of food left.`);

    }else {
        foodShortage = totalFoodNeeded - foodKilos;
        console.log(`${Math.ceil(foodShortage)} more kilos of food are needed.`);
    }    
}

pets(["5", "10", "2.1", "0.8", "321"]);


