function walking(input) {
    let index = 0;
    let curElement = input[index];
    let stepsGoal = 10000;

    let totalSteps = 0;

    while (totalSteps < stepsGoal) {
        if (curElement !== "Going home") {
            let curSteps = Number(curElement);
            totalSteps += curSteps;

        } else {
            curElement = input[++index];
            let curSteps = Number(curElement);
            totalSteps += curSteps;
            break;
        }

        curElement = input[++index];
    }

    let stepsOverGoal = totalSteps - stepsGoal;

    if (totalSteps >= stepsGoal) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsOverGoal} steps over the goal!`);

    } else {
        let stepsNeeded = stepsGoal - totalSteps;
        console.log(`${Math.abs(stepsNeeded)} more steps to reach goal.`);

    }
}

walking([
    "1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
]);