function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let giftMoney = 0;
    let moneySaved = 0;

    for (let i = 1; i <= age; i++) {
        let currentBirthday = Number(i);

        if (currentBirthday % 2 !== 0) {
            moneySaved += pricePerToy;

        } else {
            giftMoney += 10;
            moneySaved += (giftMoney - 1);

        }
    }

    if (moneySaved >= washerPrice) {
        let monetLeft = moneySaved - washerPrice;
        console.log(`Yes! ${monetLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);

    }
}

cleverLily(["21", "1570.98", "3"]);