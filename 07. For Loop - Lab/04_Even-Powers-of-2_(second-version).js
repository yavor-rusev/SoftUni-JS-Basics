function evenPowersOf2(input) {
    let n = Number(input[0]);
    
    for (let pow = 0; pow <= n; pow += 2) {
        console.log(Math.pow(2, pow));
    }
}

evenPowersOf2(["7"]);