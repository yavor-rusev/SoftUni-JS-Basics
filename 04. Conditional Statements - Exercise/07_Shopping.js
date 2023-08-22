function shopping(input){
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = processorsCount * (videoCardsPrice * 0.35);
    let ramsPrice = ramCount * (videoCardsPrice * 0.10);

    let totalPrice = videoCardsPrice + processorsPrice + ramsPrice;

    if(videoCardsCount > processorsCount){
        totalPrice = totalPrice * 0.85;
    }

    if(budget >= totalPrice){
        let extraMoney = budget - totalPrice;
        console.log(`You have ${extraMoney.toFixed(2)} leva left!`);

    }else{
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }    
}

shopping(["920.45",

"3",

"1",

"1"]);