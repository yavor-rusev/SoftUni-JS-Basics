function housePainting(input){
    let heightWalls = Number(input[0]);
    let lenghtSideWall = Number(input[1]);
    let heightRoofTrgl = Number(input[2]);

    let sideWallsArea = 2 * (heightWalls * lenghtSideWall);
    let windowsArea = 2 * (1.5 * 1.5);
    let exactSideWallsArea = sideWallsArea - windowsArea;

    let frontAndBackWallsArea = 2 * (heightWalls * heightWalls);
    let doorArea = 1.2 * 2;
    let exactFrontAndBackWallsArea = frontAndBackWallsArea - doorArea;

    let greenPaintQty = (exactFrontAndBackWallsArea + exactSideWallsArea) / 3.4;

    let roofSidesArea = 2 * (heightWalls * lenghtSideWall);
    let roofFrontAndBackArea = 2 * ((heightRoofTrgl * heightWalls) / 2);

    let redPaintQty = (roofFrontAndBackArea + roofSidesArea) / 4.3;    
    
    console.log(greenPaintQty.toFixed(2));
    console.log(redPaintQty.toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"]);