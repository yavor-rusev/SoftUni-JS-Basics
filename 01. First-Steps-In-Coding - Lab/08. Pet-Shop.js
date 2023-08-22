function calculatePrice(input){
    let dogFoodPrice = Number(input[0] * 2.50);
    let catFoodPrice = Number(input[1] * 4);
    let totalPrice = dogFoodPrice + catFoodPrice;
    console.log(`${totalPrice} lv.`);
}

calculatePrice(["5", "4"])