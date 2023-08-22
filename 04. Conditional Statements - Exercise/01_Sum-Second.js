function sumSeconds(input){
    let sec1 = Number(input[0]);
    let sec2 = Number(input[1]);
    let sec3 = Number(input[2]);
    let totalSeconds = sec1 +sec2 +sec3;
    let minutes = Math.floor(totalSeconds / 60);
    let remainingSeconds = totalSeconds % 60;
    if (remainingSeconds < 10) {
        console.log(`${minutes}:0${remainingSeconds}`);
    }else {
        console.log(`${minutes}:${remainingSeconds}`);
    }
}
sumSeconds(["14", "12", "10"]);