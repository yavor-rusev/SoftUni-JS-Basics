function characterSequence(input) {
    let word = input[0];
    let length = word.length;

    for (let i = 0; i < length; i++) {
        let letter = word[i];
        console.log(letter);
    }
}

characterSequence(["ice cream"]);