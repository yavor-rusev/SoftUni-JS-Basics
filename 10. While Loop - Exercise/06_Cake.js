function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let totalCakePieces = cakeWidth * cakeLength;
    
    let index = 2;
    let curElement = input[index];

    while (curElement !== "STOP") {
        let piecesTaken = Number(curElement);
        totalCakePieces -= piecesTaken;

        if (totalCakePieces <= 0) {
            break;
        }

        curElement = input[++index];
    }

    if (totalCakePieces <= 0) {
        console.log(`No more cake left! You need ${Math.abs(totalCakePieces)} pieces more.`);

    } else {
        console.log(`${totalCakePieces} pieces are left.`);

    }
}

cake([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);