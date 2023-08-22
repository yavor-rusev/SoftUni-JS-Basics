function godzillaVsKong(input){
    let movieBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPricePerActor = Number(input[2]);
    
    let totalClothesPrice = actorsCount * clothesPricePerActor;
    let decor = 0.10 * movieBudget;
    
    if(actorsCount > 150){
        totalClothesPrice = totalClothesPrice * 0.90;
    }

    let totalSum = totalClothesPrice + decor;

    if(totalSum > movieBudget){
        let moneyNeeded = totalSum - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);

    }else{
        let extraMoney = movieBudget - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${extraMoney.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",

"222",

"55.68"]);