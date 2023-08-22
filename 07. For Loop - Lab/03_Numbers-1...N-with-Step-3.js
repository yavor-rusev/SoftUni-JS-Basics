function numbers1ToNWithStep3(input) {
    let n = Number(input[0]);

    for (let a = 1; a <= n; a += 3) {
        console.log(a);
    }
}

numbers1ToNWithStep3(["15"]);