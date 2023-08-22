function evenPowersOf2(input) {
    let n = Number(input[0]);
    let sum = 1;    

    for (pow = 0; pow <= n; pow++) {
        
        if (pow === 0) {
            console.log(sum);
        }

        if (pow > 0) {
            sum *= 2;
               
            if (pow % 2 === 0) {
            console.log(sum);
            }
        }
    }
}

evenPowersOf2(["1"]);