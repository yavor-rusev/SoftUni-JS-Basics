function santasHoliday(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;

    let roomPerNight = 18;
    let apartmentPerNight = 25;
    let presidentApartmentPerNight = 35;

    let totalPrice = 0;

    switch (roomType) {
        case "room for one person":

            totalPrice = roomPerNight * nights;
            break;

        case "apartment":

            totalPrice = apartmentPerNight * nights;

            if (days < 10) {
                totalPrice *= 0.70;

            } else if (days <= 15) {
                totalPrice *= 0.65;

            } else {
                totalPrice *= 0.50;

            }
            break;

        case "president apartment":

            totalPrice = presidentApartmentPerNight * nights;

            if (days < 10) {
                totalPrice *= 0.90;

            } else if (days <= 15) {
                totalPrice *= 0.85;

            } else {
                totalPrice *= 0.80;

            }
            break;

    }

    if (feedback === "positive") {
        totalPrice *= 1.25;

    } else if (feedback === "negative") {
        totalPrice *= 0.90;

    }

    console.log(totalPrice.toFixed(2));

}

santasHoliday([
    "14",
    "apartment",
    "positive"
]);