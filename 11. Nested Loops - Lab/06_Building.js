function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor >= 1; floor--) {
        let curFloor = ``;

        for (let room = 0; room < y; room++) {

            if (floor === x) {
                curFloor += `L${floor}${room} `

            } else if (floor % 2 === 0) {
                curFloor += `O${floor}${room} `

            } else {
                curFloor += `A${floor}${room} `

            }
        }

        console.log(curFloor);
    }
}

building(["6", "4"]);