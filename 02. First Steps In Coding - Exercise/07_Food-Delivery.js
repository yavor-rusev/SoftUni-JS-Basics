function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);
    let chickenMenusPrice = chickenMenus*10.35;
    let fishMenusPrice = fishMenus*12.40;
    let vegetarianMenusPrice = vegetarianMenus*8.15;
    let totalMenusPrice = chickenMenusPrice+fishMenusPrice+vegetarianMenusPrice;
    let dessertPrice = totalMenusPrice*20/100;
    let totalDeliveryPrice = totalMenusPrice+dessertPrice+2.50;
    console.log(totalDeliveryPrice);
}

foodDelivery(["9", "2", "6"])

