function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let priceInApartment = 0;
    let priceInStudio = 0;

    switch (month) {
        case "May":
        case "October":
            priceInApartment = nightsCount * 65;
            priceInStudio = nightsCount * 50;

            if (nightsCount > 14) {
                priceInStudio *= 0.70;
                priceInApartment *= 0.90;

            } else if (nightsCount > 7) {
                priceInStudio *= 0.95;

            }
            break;

        case "June":
        case "September":
            priceInApartment = nightsCount * 68.70;
            priceInStudio = nightsCount * 75.20;

            if (nightsCount > 14) {
                priceInStudio *= 0.80;
                priceInApartment *= 0.90;

            }
            break;

        case "July":
        case "August":
            priceInApartment = nightsCount * 77;
            priceInStudio = nightsCount * 76;

            if (nightsCount > 14) {
                priceInApartment *= 0.90;

            }
            break;
    }

    console.log(`Apartment: ${priceInApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceInStudio.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);