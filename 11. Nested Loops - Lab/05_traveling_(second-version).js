function traveling(input) {
    let index = 0;
    let row = input[index];
   
    while (row !== "End") {
        let destination = row;

        let budget = Number(input[++index]);
        let totalSum = 0;

        while (totalSum < budget) {
            let currentSum = Number(input[++index]);
            totalSum += currentSum;
        }        
        
        console.log(`Going to ${destination}!`);        
        
        row = input[++index];        
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