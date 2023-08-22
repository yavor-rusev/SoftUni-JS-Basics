function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalSum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        switch (fruit) {
            case "banana": totalSum = quantity * 2.50;
                console.log(totalSum.toFixed(2)); break;

            case "apple": totalSum = quantity * 1.20;
                console.log(totalSum.toFixed(2)); break;

            case "orange": totalSum = quantity * 0.85;
                console.log(totalSum.toFixed(2)); break;

            case "grapefruit": totalSum = quantity * 1.45;
                console.log(totalSum.toFixed(2)); break;

            case "kiwi": totalSum = quantity * 2.70;
                console.log(totalSum.toFixed(2)); break;

            case "pineapple": totalSum = quantity * 5.50;
                console.log(totalSum.toFixed(2)); break;

            case "grapes": totalSum = quantity * 3.85;
                console.log(totalSum.toFixed(2)); break;

            default: console.log("error");
        }

    } else if (day === "Saturday" || day === "Sunday") {

        switch (fruit) {
            case "banana": totalSum = quantity * 2.70;
                console.log(totalSum.toFixed(2)); break;

            case "apple": totalSum = quantity * 1.25;
                console.log(totalSum.toFixed(2)); break;

            case "orange": totalSum = quantity * 0.90;
                console.log(totalSum.toFixed(2)); break;

            case "grapefruit": totalSum = quantity * 1.60;
                console.log(totalSum.toFixed(2)); break;

            case "kiwi": totalSum = quantity * 3.00;
                console.log(totalSum.toFixed(2)); break;

            case "pineapple": totalSum = quantity * 5.60;
                console.log(totalSum.toFixed(2)); break;

            case "grapes": totalSum = quantity * 4.20;
                console.log(totalSum.toFixed(2)); break;

            default: console.log("error");
        }

    } else {
        console.log("error");
    }
}

fruitShop(["tomato", "Monday", "0.5"]);