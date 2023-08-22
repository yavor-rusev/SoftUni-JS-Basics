function flowerShop(input){
    let magnoliasCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusesCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasMoney = magnoliasCount * 3.25;
    let hyacinthsMoney = hyacinthsCount * 4;
    let rosesMoney = rosesCount * 3.50;
    let cactusesMoney = cactusesCount * 8;

    let totalProfit = magnoliasMoney + hyacinthsMoney + rosesMoney + cactusesMoney;
    let moneyOnDisposal = totalProfit * 0.95;

    if(moneyOnDisposal >= giftPrice) {
        let moneyLeft = moneyOnDisposal - giftPrice;
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);

    }else {
        let moneyToBorrow = giftPrice - moneyOnDisposal;
        console.log(`She will have to borrow ${Math.ceil(moneyToBorrow)} leva.`);

    }
}

flowerShop(["15", "7", "5", "10", "100"]);



