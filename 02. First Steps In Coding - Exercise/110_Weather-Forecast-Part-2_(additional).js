function weatherForecastTwo(input) {
    let degrees = Number(input[0]);

    if(degrees < 5.00){
        console.log("unknown");

    }else if(degrees <= 11.9) {
        console.log("Cold");

    }else if(degrees < 12.00) {
        console.log("unknown");

    }else if(degrees <= 14.9) {
        console.log("Cool");

    }else if(degrees < 15.00) {
        console.log("unknown");
    
    }else if(degrees <= 20.00) {
        console.log("Mild");
    
    }else if(degrees < 20.1) {
        console.log("unknown");
    
    }else if(degrees <= 25.9) {
        console.log("Warm");
    
    }else if(degrees < 26.00) {
        console.log("unknown");
    
    }else if(degrees <= 35.00) {
        console.log("Hot");
    
    }else{
        console.log("unknown");
        
    }    
}

weatherForecastTwo([22.4]);