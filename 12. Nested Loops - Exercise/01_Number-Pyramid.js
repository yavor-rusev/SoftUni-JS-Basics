function numberPyramid(input) {
    let n = Number(input[0]);
    
    let currentNum = 1;
    let isBigger = false;
    let printCurrentLine = ""; 

    for(let rows = 1; rows <= n; rows++) {        
        
        for(let col = 1; col <= rows; col++) {

            if(currentNum > n) {
                isBigger = true;
                break;
            }

            printCurrentLine += currentNum + " ";
            currentNum++;               
        }

        console.log(printCurrentLine);
        printCurrentLine = ""

        if (isBigger === true) {
            break;
        }
    }
}

numberPyramid(["15"]);
