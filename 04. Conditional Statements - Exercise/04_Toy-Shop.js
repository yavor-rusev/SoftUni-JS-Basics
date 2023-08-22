function toyShop(input){
    let excursionPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    let totalPuzzlesPrice = puzzlesCount * 2.60;
    let totalDollsPrice = dollsCount * 3;
    let totalBearsPrice = bearsCount * 4.10;
    let totalMinionsPrice = minionsCount * 8.20;
    let totalTrucksPrice = trucksCount * 2;

    let totalSum = totalPuzzlesPrice + totalDollsPrice + totalBearsPrice + totalMinionsPrice + totalTrucksPrice;

    if (totalToysCount >= 50) {
        totalSum = totalSum * 0.75;
    }

    let moneyOnDispolsal = totalSum * 0.90;

    if (moneyOnDispolsal >= excursionPrice) {
        let extraMoney = moneyOnDispolsal - excursionPrice;
        console.log(`Yes! ${extraMoney.toFixed(2)} lv left.`);        
    }else {
        let moneyNeeded = excursionPrice - moneyOnDispolsal;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }    
}
toyShop(["320", "8", "2", "5", "5", "1"]);