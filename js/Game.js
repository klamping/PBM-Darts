var Game = function (gameData) {
    var self = this;
    self.isInProgress = false;

    var parsePlayers = function (data) {
        var players = [],
            numPlayers = data.length,
            tmpPlayer,
            x = 0;
        for(; x < numPlayers; x += 1){
            tmpPlayer = new Player(data[x]);
            if (!self.isInProgress && tmpPlayer.hasThrowsLeft > 0) {
                self.isInProgress = true;
            }
            players.push(tmpPlayer);
        }
        return players;
    };

    var getStandings = function (players) {
        var standings = [],
            winner = players[0].total > players[1].total ? 0 : 1;
         standings = [winner, 1 - winner];

        return standings;
    };

    self.players = parsePlayers(gameData);
    self.standings = getStandings(self.players);
};