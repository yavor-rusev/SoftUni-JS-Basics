function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]/100);    
    let gainedInterestPerMonth = depositSum * (annualInterestPercent / 12);    
    let finalSum = depositSum + (depositPeriod * gainedInterestPerMonth)
    console.log(finalSum);
}
depositCalculator(["2350", "6 ", "7 "])