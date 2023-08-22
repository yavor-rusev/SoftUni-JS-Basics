function oldBooks(input) {
    let favoriteBook = input[0];

    let index = 1;
    let curBook = input[index];
    let = checkedBooks = 0;
    let = bookIsFound = false;

    while (curBook !== "No More Books") {
        if (curBook === favoriteBook) {
            bookIsFound = true;
            break;
        }

        checkedBooks++;
        curBook = input[++index];
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);

    } else {
        console.log(`You checked ${checkedBooks} books and found it.`);

    }
}

oldBooks([
    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);