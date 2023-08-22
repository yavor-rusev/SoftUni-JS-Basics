function circleAreaAndPerimeter(input){
    let radius = Number(input[0]);

    let circleArea = Math.PI * Math.pow(radius, 2);
    let circleCircumference = 2 * Math.PI * radius;

    console.log(circleArea.toFixed(2));
    console.log(circleCircumference.toFixed(2));    
}

circleAreaAndPerimeter(["4.5"]);