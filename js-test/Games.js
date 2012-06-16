var Games = function (gamesData) {
    var self = this;
    self.record = [0,0];

    var parseGames = function (data) {
        var numGames = data.length,
            x = 0,
            games = [],
            tempGame;
        for (; x < numGames; x += 1) {
            tempGame = new Game(data[x]);
            if (!tempGame.isInProgress) {
                self.record[tempGame.standings[0]] += 1;
            }
            games.push(tempGame);
        }
    };

    var games = parseGames(gamesData);
};