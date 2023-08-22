function balls(input) {
    let ballsCount = Number(input[0]);

    points = 0;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    for (let currentBall = 1; currentBall <= ballsCount; currentBall++) {

        let colour = input[currentBall];

        if (colour === "red") {
            points += 5;
            redBalls++;

        } else if (colour === "orange") {
            points += 10;
            orangeBalls++;

        } else if (colour === "yellow") {
            points += 15;
            yellowBalls++;

        } else if (colour === "white") {
            points += 20;
            whiteBalls++;

        } else if (colour === "black") {
            points = Math.trunc(points / 2);
            blackBalls++;

        } else {
            otherBalls++;

        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}

balls([
    "3",
    "white",
    "black",
    "pink"
]);