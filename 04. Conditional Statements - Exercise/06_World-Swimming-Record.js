function worldSwimmingRecord(input){
    let recordToBeatInSeconds = Number(input[0]);
    let distanceToSwimInMetres = Number(input[1]);
    let timePerMetreInSeconds = Number(input[2]);

    let waterResistanceInSeconds = Math.floor(distanceToSwimInMetres / 15) * 12.5;

    let scoreInSeconds = (distanceToSwimInMetres * timePerMetreInSeconds) + waterResistanceInSeconds;

    if(scoreInSeconds < recordToBeatInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${scoreInSeconds.toFixed(2)} seconds.`);

    }else{
        let overtime = scoreInSeconds - recordToBeatInSeconds;
        console.log(`No, he failed! He was ${overtime.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67",

"3017",

"5.03"]);