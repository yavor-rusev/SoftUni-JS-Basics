function readtext(input) {
    let index = 0;
    
    let word = input[index];
    index++;    

    while(word !== "Stop") {
        if (word === undefined) {
            break;
        }

        console.log(word);

        word = input[index];
        index++;
    }
}

readtext([
    "Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"
]);