function traveling(input) {
    let index = 0;

    let destination = input[index];
    let budget = Number(input[++index]);
    let currentSum = Number(input[++index]);

    let totalSum = 0;

    while (destination !== "End") {


        while (totalSum < budget) {
            totalSum += currentSum;

            if (totalSum < budget) {
                currentSum = Number(input[++index]);

            }
        }

        console.log(`Going to ${destination}!`);

        totalSum = 0;

        destination = input[++index];
        budget = Number(input[++index]);
        currentSum = Number(input[++index]);

        if (destination === undefined) {
            break;
        }
    }
}

traveling([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
]);