function fishland(input){
    let mackerelKgPrice = Number(input[0]);
    let spratKgPrice = Number(input[1]);
    let bonitoKgs = Number(input[2]);
    let safridKgs = Number(input[3]);
    let musselsKgs = Number(input[4]);

    let bonitoKgPrice = mackerelKgPrice * 1.60;
    let safridKgPrice = spratKgPrice * 1.80;

    let totalSum = (bonitoKgs * bonitoKgPrice) + (safridKgs * safridKgPrice) + (musselsKgs * 7.50);

    console.log(totalSum.toFixed(2));    
}

fishland(["6.90",
"4.20",
"1.5",
"2.5", 
"1"
]);