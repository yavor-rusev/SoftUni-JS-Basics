function basketballEquipment(input){
    let annualTrainingFee = Number(input[0]);
    let sneakersPrice = annualTrainingFee - (annualTrainingFee*40/100);
    let outfitPrice = sneakersPrice - (sneakersPrice*20/100);
    let ballPrice = outfitPrice * 1/4;
    let accessoriesPrice = ballPrice * 1/5;
    let fullBasketballEquipmentPrice = sneakersPrice+outfitPrice+ballPrice+accessoriesPrice;
    let totalPrice = fullBasketballEquipmentPrice+annualTrainingFee;
    console.log(totalPrice);
}
basketballEquipment(["365"]);