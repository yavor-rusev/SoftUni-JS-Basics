function salary(input) {
    let tabCount = Number(input[0]);
    let salaryGiven = Number(input[1]);

    for (let i = 2; i <= tabCount + 2; i++) {
        let tab = input[i];

        if (tab === "Facebook") {
            salaryGiven -= 150;
        } else if (tab === "Instagram") {
            salaryGiven -= 100;
        } else if (tab === "Reddit") {
            salaryGiven -= 50;
        }

        if (salaryGiven <= 0) {
            break;
        }
    }

    if (salaryGiven <= 0) {
        console.log(`You have lost your salary.`);

    } else {
        console.log(Math.floor(salaryGiven));

    }
}

salary([
    "3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"
]);