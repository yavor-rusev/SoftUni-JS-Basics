function add15Minutes(input){
    let initialHour = Number(input[0]);
    let initialMinutes = Number(input[1]);

    let minutesCount = (initialHour * 60) + initialMinutes;
    let summedMinutes = minutesCount + 15;

    let finalHour = Math.floor(summedMinutes / 60);
    let finalMinutes = summedMinutes % 60;

    if (finalHour > 23) {
        finalHour = finalHour - 24;        
    }

    if (finalMinutes < 10) {
        console.log(`${finalHour}:0${finalMinutes}`);
    }else {
        console.log(`${finalHour}:${finalMinutes}`);
    }
}

add15Minutes(["12", "49"]);