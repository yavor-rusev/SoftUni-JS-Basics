function cinema(input) {
    let filmType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let ticketsCount = rows * columns;
    let income = 0;

    if (filmType === "Premiere") {
        income = ticketsCount * 12.00;

    } else if (filmType === "Normal") {
        income = ticketsCount * 7.50;

    } else if (filmType === "Discount") {
        income = ticketsCount * 5.00;

    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);