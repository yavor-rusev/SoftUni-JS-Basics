function calculateWorkSpaces(input){
    let lenghtRoom = Number(input[0]);
    let widthRoom = Number(input[1]);
    let hallway = 100;
    let lenghtRoomCm = lenghtRoom * 100;
    let widthRoomCm = widthRoom * 100;
    let actualWidthRoomCm = widthRoomCm - hallway;
    let workSpaceLenght = 120;
    let workSpaceWidth = 70;
    let surplusRoomLenght = lenghtRoomCm % workSpaceLenght;
    let surplusRoomWidth = actualWidthRoomCm % workSpaceWidth;
    let rows = (lenghtRoomCm - surplusRoomLenght) / workSpaceLenght;
    let desksInRow = (actualWidthRoomCm - surplusRoomWidth) / workSpaceWidth;
    let numberOfWorkSpaces = (rows * desksInRow) - 3;
    console.log(numberOfWorkSpaces);
}
calculateWorkSpaces(["15", "8.9"]);