function suppliesForSchool(input) {
    let packOfPens = Number(input[0]);
    let packOfMarkers = Number(input[1]);
    let litersBoardCleaner = Number(input[2]);
    let discountPercent = Number(input[3]/100);
    let moneyForPens = packOfPens*5.80;
    let moneyForMarkers = packOfMarkers*7.20;
    let moneyForBoardCleaner = litersBoardCleaner*1.20;    
    let totalPrice = moneyForPens + moneyForMarkers + moneyForBoardCleaner;
    let discount = totalPrice*discountPercent;
    let finalPrice = totalPrice-discount;
    console.log(finalPrice);
}

suppliesForSchool(["2", "3", "4", "25"]);