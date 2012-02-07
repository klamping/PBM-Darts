var Game = function (gameData) {
    var self = this;
    self.isInProgress = false;

    var parsePlayers = function (data) {
        var players = [],
            numPlayers = data.length,
            tmpPlayer;
        while(numPlayers--){
            tmpPlayer = new Player(data[numPlayers]);
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

        standings = [players[winner].name, players[1 - winner].name];

        return standings;
    };

    self.players = parsePlayers(gameData);
    self.standings = getStandings(self.players);
};