function transportPrice(input) {
    let kilometers = Number(input[0]);
    let dayTime = input[1];

    let taxiPrice = 0;
    let busPrice = 0;
    let trainPrice = 0;

    if(dayTime === "day") {
        taxiPrice = 0.70 + (kilometers * 0.79);
        busPrice = kilometers * 0.09;
        trainPrice = kilometers * 0.06;

    }else {
        taxiPrice = 0.70 + (kilometers * 0.90);
        busPrice = kilometers * 0.09;
        trainPrice = kilometers * 0.06;
    }

    if(kilometers < 20) {
        console.log(taxiPrice.toFixed(2));

    }else if (kilometers < 100) {
        console.log(busPrice.toFixed(2));
        
    }else {
        console.log(trainPrice.toFixed(2));
    }  
}
transportPrice(["25", "day"]);