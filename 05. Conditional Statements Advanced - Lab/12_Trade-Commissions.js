function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":
            if (sales < 0) {
                commission = "error";

            } else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.05;

            } else if (sales <= 1000) {
                commission = sales * 0.07;

            } else if (sales <= 10000) {
                commission = sales * 0.08;

            } else if (sales > 10000) {
                commission = sales * 0.12;

            }
            break;

        case "Varna":
            if (sales < 0) {
                commission = "error";

            } else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.045;

            } else if (sales <= 1000) {
                commission = sales * 0.075;

            } else if (sales <= 10000) {
                commission = sales * 0.10;

            } else if (sales > 10000) {
                commission = sales * 0.13;

            }
            break;

        case "Plovdiv":
            if (sales < 0) {
                commission = "error";

            } else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.055;

            } else if (sales <= 1000) {
                commission = sales * 0.08;

            } else if (sales <= 10000) {
                commission = sales * 0.12;

            } else if (sales > 10000) {
                commission = sales * 0.145;

            }
            break;

        default:
            commission = "error";
            break;
    }

    if (commission !== "error") {
        console.log(commission.toFixed(2));

    } else {
        console.log("error");
    }
}

tradeCommissions(["Plovdiv", "-20"]);