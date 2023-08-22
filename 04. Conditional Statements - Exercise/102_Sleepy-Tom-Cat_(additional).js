function sleepyTomCat(input){
    let daysOff = Number(input[0]);
    let workDays = 365 - daysOff;

    let gameTimeInMinutes = (daysOff * 127) + (workDays * 63);
    
    if(gameTimeInMinutes > 30000){
        let excessTimeInMinutes = gameTimeInMinutes - 30000;
        let excessTimeHours = Math.floor(excessTimeInMinutes / 60);
        let excessTimeMunutesRemainder = excessTimeInMinutes % 60;
        console.log("Tom will run away");
        console.log(`${excessTimeHours} hours and ${excessTimeMunutesRemainder} minutes more for play`);

    }else{
        let availableTimeInMinutes = 30000 - gameTimeInMinutes;
        let availableTimeHours = Math.floor(availableTimeInMinutes / 60);
        let availableTimeMunutesRemainder = availableTimeInMinutes % 60;
        console.log("Tom sleeps well");
        console.log(`${availableTimeHours} hours and ${availableTimeMunutesRemainder} minutes less for play`);
    }
}

sleepyTomCat(["113"]);