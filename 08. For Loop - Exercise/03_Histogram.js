function histogram(input) {
    let numCount = Number(input[0]);
    let numGroup1 = 0;
    let numGroup2 = 0;
    let numGroup3 = 0;
    let numGroup4 = 0;
    let numGroup5 = 0;

    for (let i = 1; i <= numCount; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < 200) {
            numGroup1++;

        } else if (currentNum <= 399) {
            numGroup2++;

        } else if (currentNum <= 599) {
            numGroup3++;

        }
        else if (currentNum <= 799) {
            numGroup4++;

        } else if (currentNum >= 800) {
            numGroup5++;

        }
    }

    let numGroup1Percent = (numGroup1 / numCount) * 100;
    let numGroup2Percent = (numGroup2 / numCount) * 100;
    let numGroup3Percent = (numGroup3 / numCount) * 100;
    let numGroup4Percent = (numGroup4 / numCount) * 100;
    let numGroup5Percent = (numGroup5 / numCount) * 100;

    console.log(`${numGroup1Percent.toFixed(2)}%`);
    console.log(`${numGroup2Percent.toFixed(2)}%`);
    console.log(`${numGroup3Percent.toFixed(2)}%`);
    console.log(`${numGroup4Percent.toFixed(2)}%`);
    console.log(`${numGroup5Percent.toFixed(2)}%`);
}

histogram([
    "14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"
]);