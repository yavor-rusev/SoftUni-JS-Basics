function moving(input) {
    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeight = Number(input[2]);

    let volume = spaceWidth * spaceLength * spaceHeight;

    let index = 3;
    let curElement = input[index];

    while (curElement !== "Done") {
        let curBoxes = Number(curElement);
        volume -= curBoxes;

        if (volume <= 0) {
            let volumeNeeded = volume * -1;
            console.log(`No more free space! You need ${volumeNeeded} Cubic meters more.`);
            return;
        }

        curElement = input[++index];
    }

    console.log(`${volume} Cubic meters left.`);
}

moving([
    "10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
]);