function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalSum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        switch (fruit) {
            case "banana": totalSum = quantity * 2.50; break;

            case "apple": totalSum = quantity * 1.20; break;

            case "orange": totalSum = quantity * 0.85; break;

            case "grapefruit": totalSum = quantity * 1.45; break;

            case "kiwi": totalSum = quantity * 2.70; break;

            case "pineapple": totalSum = quantity * 5.50; break;

            case "grapes": totalSum = quantity * 3.85; break;

            default: totalSum = "error";
        }

    } else if (day === "Saturday" || day === "Sunday") {

        switch (fruit) {
            case "banana": totalSum = quantity * 2.70; break;

            case "apple": totalSum = quantity * 1.25; break;

            case "orange": totalSum = quantity * 0.90; break;

            case "grapefruit": totalSum = quantity * 1.60; break;

            case "kiwi": totalSum = quantity * 3.00; break;

            case "pineapple": totalSum = quantity * 5.60; break;

            case "grapes": totalSum = quantity * 4.20; break;

            default: totalSum = "error";
        }

    } else {
        totalSum = "error";
    }

    if (totalSum !== "error") {
        console.log(totalSum.toFixed(2));

    } else {
        console.log(totalSum);
    }
}

fruitShop(["apple", "Sunday", "0.5"]);