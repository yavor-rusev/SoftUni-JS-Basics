function sequence2kPlus1(input) {
    let numReceived = Number(input[0]);
    let num = 1;

    while (num <= numReceived) {

        console.log(num);
        num = (num * 2) + 1;
    }
}

sequence2kPlus1(["31"]);