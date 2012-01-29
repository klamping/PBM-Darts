var gameData = {
    players: ["Paul", "Kevin"],
    games: [
        ["111111122222223333333", "000000100000020000003"], // paul with 780, kevin with 150
        ["100000010000001000000", "000000000000000000003"], // paul with 45, kevin with 75
        ["2543873215123", "5699365"]
    ],
    hitValue: [15,16,17,18,19,20,25],
    rounds: 3
};


// logic flow
// calculateScores takes in all scores, loops and calls calculateRounds, returns array
// calculateRounds takes in single player scores, loops and calls calculateRound, returns total of rounds
// calculateRounds takes in a round, returns
var Throw = function (hits, value) {
    var self = this;
    self.hits = ko.observable(hits);
    self.value = ko.observable(value);
    self.total = ko.computed(function () {
        return self.hits * self.value;
    });
};

var Round = function (throws) {
    var self = this;
    self.throws = ko.observableArray(throws);
    self.throwsLeft = ko.computed(function() {
        return gameData.hitValues.length - self.throws().length;
    });
    self.total = ko.computed(function () {
        var score = 0,
            throws = self.throws(),
            i = throws.length,
            hitValues = gameData.hitValue;

        while (i--) {
            score += throws[i].total();
        }

        return score;
    });
};

var Player = function (name, rounds) {
    var self = this;
    self.name = ko.observable(name);
    self.rounds = ko.observableArray(rounds);
};

var Game = function (rounds, players) {
    var self = this;
    self.roundsInput = rounds;
    self.players = ko.observableArray(players);
    self.rounds = ko.observableArray();
    self.winner = ko.observable();
    self.loser =  ko.observable();
    self.theme = "c";
    self.isInProgress = ko.observable(false);
    var gameText = {
        completed: {
            win: "won with",
            lose: "had"
        },
        inProgress: {
            win: "is leading with",
            lose: "has"
        }
    };

    var calculateRound = function (hits) {
        var score = 0,
            i = hits.length;
        if (hits.length < gameData.hitValue.length && !self.isInProgress()) {
            self.isInProgress(true);
            self.theme = "e";
        }

        while (i--) {
            score += hits[i] * gameData.hitValue[i];
        }

        return score;
    };

    var calculateRounds = function (rounds, player) {
        var scores = [],
            i = rounds.length;

        while (i--) {
            scores.push(calculateRound(rounds[i]));
        }

        return scores;
    };

    var calculateScores = function () {
        var scores = [],
            rounds = self.roundsInput,
            players = self.players(),
            i = 0;

        // loop through each player
        for (; i < players.length; i++) {
            players[i].rounds(rounds[i]);
            scores.push(calculateRounds(rounds[i], players[i]));
        }
        return scores;
    };

    var calculateTotal = function (scores) {
        var score = 0,
            i = scores.length;
        while (i--) {
            score += scores[i];
        }

        return score;
    };

    var calculateTotals = function () {
        var scores = calculateScores(),
            totals = [],
            i = scores.length,
            winnerIndex;

        while (i--) {
            totals[i] = calculateTotal(scores[i]);
        }

        winnerIndex = totals[0] > totals[1] ? 0 : 1;

        var text = self.isInProgress() ? gameText.inProgress : gameText.completed;
        self.winner = self.players()[winnerIndex].name() + " " + text.win + " " + totals[winnerIndex] + " points.";
        self.loser = self.players()[1 - winnerIndex].name() + " " + text.lose + " " + totals[1 - winnerIndex] + " points.";
    };

    calculateTotals();
};

function GamesViewModel () {
    // Data
    var self = this,
        i = 0,
        rounds,
        game,
        players = [
            new Player(gameData.players[0]),
            new Player(gameData.players[1])
        ];

    self.games = ko.observableArray();
    self.chosenGameData = ko.observable();

    var splitGame = function (games) {
        var rounds = [[], []],
            i = games.length,
            round,
            game,
            roundLen = 0,
            numRounds = gameData.rounds;

        while (i--) {
            game = games[i].split("");
            roundLen = game.length / numRounds;
            // each game needs to be sliced up in to seperate rounds
            while (game.length) {
                round = game.splice(0, roundLen);
                rounds[i].push(round);
            }
        }

        return rounds;
    };

    for (; i < gameData.games.length; i++) {
        game = gameData.games[i];
        rounds = splitGame(game);
        self.games.push(new Game(rounds, players));
    }

    self.goToGame = function (game) {
        self.chosenGameData = game;
    };

};

ko.applyBindings(new GamesViewModel());