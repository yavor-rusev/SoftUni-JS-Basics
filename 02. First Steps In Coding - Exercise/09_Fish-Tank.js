function fishTank(input){
    let lenghtCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let hightCm = Number(input[2]);
    let sand = Number(input[3]);
    let sandVolumePercent = sand/100;
    let tankVolumeSqCm = lenghtCm*widthCm*hightCm;
    let waterVolumeSqCm = tankVolumeSqCm-(tankVolumeSqCm*sandVolumePercent);
    let waterVolumeLiters = waterVolumeSqCm/1000;
    console.log(waterVolumeLiters);
}
fishTank(["85", "75", "47", "17 "])