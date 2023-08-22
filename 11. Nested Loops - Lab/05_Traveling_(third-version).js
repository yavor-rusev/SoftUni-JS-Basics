function traveling(input) {
    let index = 0;
    let row = input[index];
    let inputLength = Number(input.length)
    let nextDestination = false;

    while (row !== "End") {  
        if (index >= inputLength) {
            return;
        }

        if (row[0] === "0" || row[0] === "1" || row[0] === "2" || row[0] === "3" || row[0] === "4" || row[0] === "5" || row[0] === "6" || row[0] === "7" || row[0] === "8" || row[0] === "9") {
            row = input[++index];
            continue;
        }
        
        let destination = row;
        let nextElement = "";

        let budget = Number(input[++index]);
        let totalSum = 0;

        while (totalSum < budget) {
            nextElement = input[++index];

            if (index >= inputLength) {
                return;
            }

            let firstCharacter = nextElement[0];

            switch (firstCharacter) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    let currentSum = Number(nextElement);
                    totalSum += currentSum;
                    break;
                default:
                    nextDestination = true;
                    break;
            }

            if (nextDestination === true) {
                break;
            }
        }

        if (totalSum >= budget) {
            console.log(`Going to ${destination}!`);
            row = input[++index];

        } else if (nextDestination === true) {
            row = nextElement;
            nextDestination = false;

        }      
    }
}

traveling([
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "500",
    "1000",
    "650",
    "Portugal",
    "Sofia",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "300"
]);