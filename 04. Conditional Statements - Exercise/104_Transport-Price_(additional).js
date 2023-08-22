function transportPrice(input) {
    let kilometers = Number(input[0]);
    let dayTime = input[1];

    let taxiPrice = 0;
    let busPrice = kilometers * 0.09;
    let trainPrice = kilometers * 0.06;

    if(dayTime === "day") {
        taxiPrice = 0.70 + (kilometers * 0.79);
        
    }else {
        taxiPrice = 0.70 + (kilometers * 0.90);        
    }

    if(kilometers < 20) {
        console.log(taxiPrice.toFixed(2));

    }else if (kilometers < 100) {
        console.log(busPrice.toFixed(2));
        
    }else {
        console.log(trainPrice.toFixed(2));
    }  
}
transportPrice(["180", "night"]);