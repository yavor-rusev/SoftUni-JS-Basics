function skiTrip(input) {
    let days = Number(input[0]);
    let placeType = input[1];
    let feedback = input[2];

    let nights = days - 1;

    let roomNightPrice = 18.00;
    let apartmentNightPrice = 25.00
    let presidentApartmentNightPrice = 35.00;

    let totalSum = 0;

    if (nights < 10) {
        
        switch(placeType) {   
            case "room for one person":
                totalSum = nights * roomNightPrice;
                break;
                     
            case "apartment":
                totalSum = nights * (apartmentNightPrice * 0.70);
                break;

            case "president apartment":
                totalSum = nights * (presidentApartmentNightPrice * 0.90);
                break;
        }

    }else if (nights <= 15) {

        switch(placeType) { 
            case "room for one person":
                totalSum = nights * roomNightPrice;
                break;

            case "apartment":
                totalSum = nights * (apartmentNightPrice * 0.65);
                break;

            case "president apartment":
                totalSum = nights * (presidentApartmentNightPrice * 0.85);
                break;
        }

    }else {

        switch(placeType) {  
            case "room for one person":
                totalSum = nights * roomNightPrice;
                break;

            case "apartment":
                totalSum = nights * (apartmentNightPrice * 0.50);
                break;

            case "president apartment":
                totalSum = nights * (presidentApartmentNightPrice * 0.80);
                break;
        }
    }

    if (feedback === "positive") {
        totalSum *= 1.25;

    }else if (feedback === "negative") {

        totalSum *=0.90;
    }

    console.log(totalSum.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);