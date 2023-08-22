function pipesInPool(input){
    let poolVolumeLiters = Number(input[0]);
    let firstPipeLitersPerHour = Number(input[1]);
    let secondPipeLitersPerHour = Number(input[2]);
    let workersHoursAway = Number(input[3]);

    let waterFromFirstPipe = firstPipeLitersPerHour * workersHoursAway;
    let waterFromSecondPipe = secondPipeLitersPerHour * workersHoursAway;
    let waterInPool = waterFromFirstPipe + waterFromSecondPipe;    
    
    if (waterInPool <= poolVolumeLiters) {
        let poolFullnessPercent = (waterInPool / poolVolumeLiters) * 100;
        let waterFromFirstPipePercent = (waterFromFirstPipe / waterInPool) * 100;
        let waterFromSecondPipePercent = (waterFromSecondPipe / waterInPool) * 100;
        
        console.log(`The pool is ${poolFullnessPercent.toFixed(2)}% full. Pipe 1: ${waterFromFirstPipePercent.toFixed(2)}%. Pipe 2: ${waterFromSecondPipePercent.toFixed(2)}%.`);
    
    }else {
        let waterSurplus = waterInPool - poolVolumeLiters;

        console.log(`For ${workersHoursAway.toFixed(2)} hours the pool overflows with ${waterSurplus.toFixed(2)} liters.`);

    }
}

pipesInPool(["100", "100", "100", "2.5"]);