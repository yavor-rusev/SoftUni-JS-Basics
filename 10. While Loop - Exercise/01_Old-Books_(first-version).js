function oldBooks(input) {
    let favoriteBook = input[0];

    let index = 1;
    let curBook = input[index];
    let = checkedBooks = 0;

    while (curBook !== "No More Books") {
        if (curBook === favoriteBook) {
            break;
        }

        checkedBooks++;
        curBook = input[++index];
    }

    if (curBook === favoriteBook) {
        console.log(`You checked ${checkedBooks} books and found it.`);

    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    }
}

oldBooks([
    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);
