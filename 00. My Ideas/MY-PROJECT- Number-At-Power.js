function numberAtPower(input) {
    let base = Number(input[0]);
    let receivedPower = Number(input[1]);
    let sum = 1;

    if (receivedPower === 0) {
        sum = sum;

    } else if (receivedPower > 0) {

        for (let power = 1; power <= receivedPower; power++) {
            sum *= base;
        }

    } else if (receivedPower < 0) {

        for (let power = -1; power >= receivedPower; power--) {
            sum *= (1 / base);
        }
    }

    console.log(sum);
    console.log(Math.pow(base, receivedPower));
}

numberAtPower(["5", "-4"]);
