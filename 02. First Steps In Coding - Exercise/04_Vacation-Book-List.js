function vacationBookList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysUntilDeadline = Number(input[2]);
    let readingHoursPerDay = (bookPages / pagesPerHour) / daysUntilDeadline;
    console.log(readingHoursPerDay);
}

vacationBookList(["212", "20", "2"])