function skeleton(input) {
    let checkpointMinutes = Number(input[0]);
    let checkpointSeconds = Number(input[1]);
    let distanceInMeters = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let checkPointTotalSeconds = (checkpointMinutes * 60) + checkpointSeconds;

    let usualTimeToFinish = (distanceInMeters / 100) * secondsPer100Meters;

    let slopeTimeShortening = (distanceInMeters / 120) * 2.5;

    let finalScore = usualTimeToFinish - slopeTimeShortening;

    if (finalScore <= checkPointTotalSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${finalScore.toFixed(3)}.`);

    } else {
        let secondsSlower = finalScore - checkPointTotalSeconds;
        console.log(`No, Marin failed! He was ${secondsSlower.toFixed(3)} second slower.`);

    }
}

skeleton([
    "2",
    "12",
    "1200",
    "10"
]);