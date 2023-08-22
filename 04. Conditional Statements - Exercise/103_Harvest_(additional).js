function harvest(input) {
    let vineyardSqMeters = Number(input[0]);
    let grapesKilosPerSqMeter = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let areaForWine = vineyardSqMeters * 0.40;
    let grapesKilos = areaForWine * grapesKilosPerSqMeter;
    let wineProduced = grapesKilos / 2.5;

    if(wineProduced < wineNeeded) {
        let wineShortage = Math.floor(wineNeeded - wineProduced);
        console.log(`It will be a tough winter! More ${wineShortage} liters wine needed.`);

    }else {
        let wineSurplus = Math.ceil(wineProduced - wineNeeded);
        let winePerWorker = Math.ceil(wineSurplus / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        console.log(`${wineSurplus} liters left -> ${winePerWorker} liters per person.`);
    }    
}

harvest(["1020", "1.5", "425", "4"]);