function lunchBreak(input){
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * (1/8);
    let restTime = breakTime * (1/4);

    let freeTime = breakTime - (lunchTime + restTime);

    if(freeTime >= episodeDuration){
        let extraTime = freeTime - episodeDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(extraTime)} minutes free time.`);

    }else{
        let timeNeeded = episodeDuration - freeTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
    
}

lunchBreak(["Teen Wolf",

"48",

"60"]);