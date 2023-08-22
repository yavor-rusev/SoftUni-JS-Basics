function everest(input) {
    let index = 0;
    let currentElement = input[index];

    let days = 1;
    let rest = "";
    let altitudeReached = 5364;
    let peakEverest = 8848;

    while (currentElement !== "END") {

        rest = currentElement;

        if (rest === "Yes") {
            days++;

        }

        if (days > 5) {
            break;
        }

        let metersClimbed = Number(input[++index]);

        altitudeReached += metersClimbed;

        if (altitudeReached >= peakEverest) {
            break;

        }

        currentElement = input[++index];

    }

    if (altitudeReached >= peakEverest) {
        console.log(`Goal reached for ${days} days!`);

    } else {
        console.log("Failed!");
        console.log(`${altitudeReached}`);

    }
}

everest([
    "Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"
]);