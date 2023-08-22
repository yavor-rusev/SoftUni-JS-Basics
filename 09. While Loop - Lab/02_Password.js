function passwords(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let passInserted = input[index];
    

    while(passInserted !== password) {
        index++;
        passInserted = input[index];        
    }

    console.log(`Welcome ${username}!`);
}

passwords([
    "Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"
]);