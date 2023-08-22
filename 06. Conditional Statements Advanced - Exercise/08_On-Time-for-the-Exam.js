function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTotalMinutes = (examHour * 60) + examMinutes;
    let arrivalTotalMinutes = (arrivalHour * 60) + arrivalMinutes;
    let minutesAdvance = 30;



    if (arrivalTotalMinutes > examTotalMinutes) {
        let totalMinutesAfter = arrivalTotalMinutes - examTotalMinutes;

        if (totalMinutesAfter < 60) {
            console.log("late");
            console.log(`${totalMinutesAfter} minutes after the start`);

        } else {
            let hoursAfter = Math.floor(totalMinutesAfter / 60);
            let minutesAfter = totalMinutesAfter % 60;

            if (minutesAfter < 10) {
                minutesAfter = (`0${minutesAfter}`)
            }

            console.log("late");
            console.log(`${hoursAfter}:${minutesAfter} hours after the start`);
        }

    } else if (arrivalTotalMinutes >= (examTotalMinutes - minutesAdvance)) {
        let totalMinutesBefore = examTotalMinutes - arrivalTotalMinutes;
        console.log("On time");

        if (totalMinutesBefore !== 0) {
            console.log(`${totalMinutesBefore} minutes before the start`);
        }

    } else {
        let totalMinutesBefore = examTotalMinutes - arrivalTotalMinutes;

        if (totalMinutesBefore < 60) {
            console.log("Early");
            console.log(`${totalMinutesBefore} minutes before the start`);

        } else {
            let hoursBefore = Math.floor(totalMinutesBefore / 60);
            let minutesBefore = totalMinutesBefore % 60;

            if (minutesBefore < 10) {
                minutesBefore = (`0${minutesBefore}`)
            }

            console.log("Early");
            console.log(`${hoursBefore}:${minutesBefore} hours before the start`);
        }
    }
}

onTimeForTheExam(["11", "30", "12", "29"]);