function cinemaTickets(input) {
    let index = 0;
    let currentElement = input[index];

    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let totalTicketsCount = 0;

    while (currentElement !== "Finish") {
        let movie = currentElement;
        let seats = Number(input[++index]);
        let nextElement = input[++index];

        let seatsTaken = 0;

        while (nextElement !== "End") {
            let ticketType = nextElement;

            if (ticketType === "student") {
                studentTickets++;

            } else if (ticketType === "standard") {
                standartTickets++;

            } else {
                kidsTickets++;

            }

            seatsTaken++;
            totalTicketsCount++;

            if (seatsTaken >= seats) {
                break;
            }

            nextElement = input[++index];
        }

        let percentBoughtSeats = (seatsTaken / seats) * 100;
        console.log(`${movie} - ${percentBoughtSeats.toFixed(2)}% full.`);

        currentElement = input[++index];

    }

    let percentStudentTickets = (studentTickets / totalTicketsCount) * 100;
    let percentStandartTickets = (standartTickets / totalTicketsCount) * 100;
    let percentKidsTickets = (kidsTickets / totalTicketsCount) * 100;

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);

}

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
]);