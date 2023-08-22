function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let salesIncomePerDay = Number(input[1]);
    let totalExpenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let days = 5;

    let totalPocketMoney = pocketMoneyPerDay * days;
    let totalSalesIncome = salesIncomePerDay * days;

    let totalSavedMoney = totalPocketMoney + totalSalesIncome;
    let finalSum = totalSavedMoney - totalExpenses;

    if (finalSum >= giftPrice) {
        console.log(`Profit: ${finalSum.toFixed(2)} BGN, the gift has been purchased.`);

    } else {
        let moneyNeeded = giftPrice - finalSum;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);

    }
}

braceletStand([
    "5.12",
    "32.05",
    "15",
    "150"
]);