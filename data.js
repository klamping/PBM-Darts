var data = {
    001: {
        "name": "Game #1",
        "games": [
            {
                "pid": 1,
                "rounds": [
                    [1,2,1,1,3,3,2],
                    [1,2,1,1,3,3,2],
                    [1,2,1,1,3,3,2]
                ]
            },
            {
                "pid": 2,
                "rounds": [
                    [1,2,1,1,3,3,2],
                    [1,2,1,1,3,3,2],
                    [1,2,1,1,3,3,2]
                ]
            }
        ]
    }
};

var Kit = function (hits, count) {
    this.hits = hits;
    this.count = count;
    this.score = hits * count;
};

var Round = function (kits) {
    this.kits = kits.splice(0); // copy array over so we can modify what was passed in
    this.total = 0;

    var kit;
    while (kit = kits.pop()) { // assignment, loops through array of kits until all are used
        this.total += kit.score;
    }
};

var Game = function (pid, rounds) {
    this.pid = pid;
    this.rounds = rounds.splice(0);
    this.total = 0;

    var round;
    while (round = round.pop()) {
        this.total += round.total;
    }
};

var Games = function (name, games) {
    this.name = name;
    this.games = games;
};

var players = {
    0: {
        "name": "Kevin",
        "email": "klamping@gmail.com"
    },
    1: {
        "name": "Paul",
        "email": "palamping@yahoo.com"
    }
}