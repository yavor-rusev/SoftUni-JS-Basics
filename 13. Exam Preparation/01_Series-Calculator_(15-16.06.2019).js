function seriesCalculator(input) {
    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let episodeWithAds = episodeDuration * 1.20;
    let spesialEpisodesAditionalTime = seasonsCount * 10;

    let totalTimeNeeded = (seasonsCount * episodesCount * episodeWithAds) + spesialEpisodesAditionalTime;

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTimeNeeded)} minutes.`);

}

seriesCalculator([
    "Lucifer",
    "3",
    "18",
    "55"
]);