function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let totalMen = 0;
    let musallaGroup = 0;
    let montBlancGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestgroup = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let membersCount = Number(input[i]);
        totalMen += membersCount;

        if (membersCount <= 5) {
            musallaGroup += membersCount;

        } else if (membersCount <= 12) {
            montBlancGroup += membersCount;

        } else if (membersCount <= 25) {
            kilimanjaroGroup += membersCount;

        } else if (membersCount <= 40) {
            k2Group += membersCount;

        } else if (membersCount > 40) {
            everestgroup += membersCount;

        }
    }

    let musallaGroupPercent = (musallaGroup / totalMen) * 100;
    let montBlancGroupPercent = (montBlancGroup / totalMen) * 100;
    let kilimanjaroGroupPercent = (kilimanjaroGroup / totalMen) * 100;
    let k2GroupPercent = (k2Group / totalMen) * 100;
    let everestgroupPercent = (everestgroup / totalMen) * 100;

    console.log(`${musallaGroupPercent.toFixed(2)}%`);
    console.log(`${montBlancGroupPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroGroupPercent.toFixed(2)}%`);
    console.log(`${k2GroupPercent.toFixed(2)}%`);
    console.log(`${everestgroupPercent.toFixed(2)}%`);
    
}

trekkingMania([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
]);
