var Game = function () {
    var self = this;
    self.winner = "Kevin";
    self.loser = "Paul";
    self.players = ["Player 1", "Player 2"];
};

var Games = function (gameData) {
    var self = this;
    self.games = [
        new Game(),
        new Game()
    ];
};