function repainting(input){
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinerQuantity = Number(input[2]);
    let workHours = Number(input[3]);
    let extraPaint = paintQuantity*10/100;    
    let totalPaintPrice = (paintQuantity+extraPaint)*14.50;
    let totalNylonPrice = (nylonQuantity+2)*1.50;
    let thinerPrice = thinerQuantity*5.00;
    let moneyForMaterials =  totalPaintPrice + totalNylonPrice + thinerPrice + 0.40;
    let pricePerWorkHour = moneyForMaterials*30/100;
    let moneyForWork = pricePerWorkHour*workHours;
    let finalPrice = moneyForMaterials + moneyForWork;
    console.log(finalPrice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);