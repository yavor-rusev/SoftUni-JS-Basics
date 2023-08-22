function calculatePrice(input){

    let totalPrice = Number(input[0]*7.61);
    let discount = totalPrice*0.18;
    let finalPrice = totalPrice-discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}



calculatePrice(['550'])